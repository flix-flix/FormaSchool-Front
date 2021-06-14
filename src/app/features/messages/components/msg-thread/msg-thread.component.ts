import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Salon } from 'src/app/models/salon/salon';
import { SalonService } from 'src/app/services/salon.service';
import { Message } from '../../../../models/message';
import { MessageService } from '../../../../services/message.service';

@Component({
  selector: 'app-msg-thread',
  templateUrl: './msg-thread.component.html',
  styleUrls: ['./msg-thread.component.css']
})
export class MsgThreadComponent implements OnInit {
  @ViewChild("scrollMe") private msgThread: ElementRef;

  @Input() teamId: string;
  /** The displayed salon */
  @Input() salonId: string;

  /** Messages grouped by date and sorted by time */
  msgs: Message[][];

  // TODO [Remove]
  /**  */
  _msgs: Message[];

  /** true: the thread has been scrolled down on init */
  scrolledDownOnInit = false;
  /** true: currently displayed salon */
  isDisplayed: boolean;

  // TODO [Optimise] prevent re-contruct RouteReuseStrategy
  constructor(private msgService: MessageService, private salonService: SalonService) { }

  ngOnInit(): void {
    this.msgService.findAllMessageOfSalon(this.salonId).subscribe(msgs => {
      this._msgs = msgs.map(msg => Message.fromJSON(msg))
      this._msgs.forEach(msg => msg.processEmoji(this.teamId))
      this.groupMsgByDay();
    });

    // TODO
    // this.isDisplayed = this.salon.id == this.salonId;
  }

  ngAfterViewChecked() {
    // TODO [Improve] show un-read messages
    // On loading: scroll down to the last message
    if (this.isDisplayed && !this.scrolledDownOnInit) {
      this.scrollToBottom();
      this.scrolledDownOnInit = true;
    }
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
  addMsg = (msg: Message) => {
    msg.processEmoji(this.teamId);
    if (this.msgs.length == 0 || !isSameDay(msg.send, this.msgs[this.msgs.length - 1][0].send))
      this.msgs.push([]);
    this.msgs[this.msgs.length - 1].push(msg);
  }

  // =========================================================================================

  /** Called on msgwriter (keyup) */
  keyUp = (event) => {
    if (event.keyCode == 13)// Enter
      this.scrollToBottom();
  }

  // =========================================================================================
  // TODO [service]

  /** Send the written message  */
  sendMsg = (text) => {
    // TODO [Improve] server get user from session

    // let msg = new Message(nextId++, UserService.generateUserNamePicture(1), new Date(), new Date(), text, undefined);
    // this.msgService.post(msg, this.salon.id);
    // this.addMsg(msg);
    // this.salon.msgs.push(msg);
  }

  deleteMsg = (msgId) => {
    // TODO [back]
    // this.msgService.delete(msgId);
    // this.salon.msgs = this.salon.msgs.filter(msg => msg.id != msgId);
    // this.groupMsgByDay();
  }
}

/** Returns true if the 2 datetime are on the same day */
const isSameDay = (date1, date2) => {
  return date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear();
}
