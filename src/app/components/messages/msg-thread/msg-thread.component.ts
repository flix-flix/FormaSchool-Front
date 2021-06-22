import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Member } from 'src/app/models/member/member';
import { MessageSend } from 'src/app/models/messages/messageSend';
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
  member: Member;

  /** Messages grouped by date and sorted by time */
  msgs: Message[][];

  constructor(private msgService: MessageService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.msgService.registerThread(this);
    this.storageService.subscribe("user", user => this.member = user?.members.find(member => member.team.id == this.teamId));
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
  setMessages = (_msgs) => {
    this.msgs = [];
    let date = new Date(0);

    for (let i in _msgs) {
      if (!isSameDay(_msgs[i].send, date)) {
        this.msgs.push([]);
        date = _msgs[i].send;
      }
      this.msgs[this.msgs.length - 1].push(_msgs[i]);
    }
  }

  // =========================================================================================

  sendMsg = (msg: MessageSend) => this.msgService.send({ memberId: this.member.id, salonId: this.salonId, ...msg });

  deleteMsg = (msgId: string) => this.msgService.deleteMsg(msgId);
}

/** Returns true if the 2 datetime are on the same day */
const isSameDay = (date1, date2) => date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear();
