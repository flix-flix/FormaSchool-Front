import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import { MessageSend } from 'src/app/models/messages/messageSend';
import { UserLocalStorage } from 'src/app/models/user/userLocalStorage';
import { StorageService } from 'src/app/services/storage.service';
import { Message } from '../../../models/message';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-msg-thread',
  templateUrl: './msg-thread.component.html',
  styleUrls: ['./msg-thread.component.css']
})
export class MsgThreadComponent implements OnInit {
  @ViewChild("scrollMe") private msgThread: ElementRef;

  @Input() teamId: string;
  @Input() salonId: string;

  user: UserLocalStorage;
  memberId: string;

  /** Messages grouped by date and sorted by time */
  msgs: Message[][];

  // TODO [Remove]
  /** List of all the messages */
  _msgs: Message[];

  // TODO [Optimise] prevent re-contruct RouteReuseStrategy
  constructor(private msgService: MessageService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.msgService.registerThread(this.salonId, this);

    this.msgService.findAllMessageOfSalon(this.salonId).subscribe(msgs => {
      this._msgs = msgs.map(msg => Message.fromJSON(msg))
      this._msgs.forEach(msg => msg.processEmoji(this.teamId))
      this.groupMsgByDay();

      setTimeout(() => this.scrollToBottom(), 250);
    });

    this.initUserMember();
    this.storageService.changes.subscribe(() => this.initUserMember());
  }

  initUserMember() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.memberId = this.user.members.find(member => member.team.id == this.teamId).id;
  }

  /** Scroll the view to the last message */
  scrollToBottom(): void {
    try {
      this.msgThread.nativeElement.scrollTop = this.msgThread.nativeElement.scrollHeight;
    } catch (err) {
      console.error(err);
    }
  }

  // =========================================================================================

  // TODO Call it only one time
  /** Group messages with same day */
  groupMsgByDay = () => {
    this.msgs = [];
    let date = new Date(0);

    for (let i in this._msgs) {
      if (!isSameDay(this._msgs[i].send, date)) {
        this.msgs.push([]);
        date = this._msgs[i].send;
      }
      this.msgs[this.msgs.length - 1].push(this._msgs[i]);
    }
  }

  // TODO Allow the message to be added before
  /** Add the message to the day-grouped messages */
  addMsg = (msg: Message, scroll = false) => {
    msg.processEmoji(this.teamId);
    if (this.msgs.length == 0 || !isSameDay(msg.send, this.msgs[this.msgs.length - 1][0].send))
      this.msgs.push([]);
    this.msgs[this.msgs.length - 1].push(msg);

    if (scroll)
      setTimeout(() => this.scrollToBottom(), 250);
  }

  removeMsg(msgId: string) {
    this._msgs = this._msgs.filter(msg => msg.id !== msgId);
    this.groupMsgByDay();
  }

  // =========================================================================================

  /** Send the written message  */
  sendMsg = (msg: MessageSend) => {
    msg.memberId = this.memberId;
    msg.salonId = this.salonId;

    this.msgService.sendWs(msg);
  }

  deleteMsg = (msgId: string) => {
    this.msgService.deleteWs(msgId);
  }
}

/** Returns true if the 2 datetime are on the same day */
const isSameDay = (date1, date2) => {
  return date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear();
}
