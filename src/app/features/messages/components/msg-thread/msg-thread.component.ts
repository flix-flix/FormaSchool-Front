import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Salon } from 'src/app/models/salon';
import { SalonService } from 'src/app/services/salon.service';
import { UserService } from 'src/app/services/user.service';
import { Message } from '../../models/message';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-msg-thread',
  templateUrl: './msg-thread.component.html',
  styleUrls: ['./msg-thread.component.css']
})
export class MsgThreadComponent implements OnInit {
  @ViewChild("scrollMe") private msgThread: ElementRef;

  /** The displayed salon */
  @Input() salonId: number;

  salon: Salon;

  /** Messages grouped by date and sorted by time */
  msgs: Message[][];

  /** true: the thread has been scrolled down on init */
  scrolledDownOnInit = false;
  /** true: currently displayed salon */
  isDisplayed: boolean;

  // TODO [Optimise] prevent re-contruct RouteReuseStrategy
  constructor(private msgService: MessageService, private salonService: SalonService) { }

  ngOnInit(): void {
    this.salonService.findById(this.salonId).subscribe(salon => {
      this.salon = salon;
      this.groupMsgByDay();
    });

    this.isDisplayed = this.salon.id == this.salonId;
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

  /** Group messages with same day */
  groupMsgByDay = () => {
    this.msgs = [];
    let date = new Date(0);

    for (let i in this.salon.msgs) {
      if (!isSameDay(this.salon.msgs[i].date, date)) {
        this.msgs.push([]);
        date = this.salon.msgs[i].date;
      }
      this.msgs[this.msgs.length - 1].push(this.salon.msgs[i]);
    }
  }

  // TODO Allow the message to be added before
  /** Add the message to the day-grouped messages */
  addMsg = (msg: Message) => {
    msg.processEmoji(this.salon.teamId);
    if (this.msgs.length == 0 || !isSameDay(msg.date, this.msgs[this.msgs.length - 1][0].date))
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
    let msg = new Message(nextId++, UserService.generateUserNamePicture(1), new Date(), text, undefined);
    this.msgService.post(msg, this.salon.id);
    this.addMsg(msg);
    this.salon.msgs.push(msg);
  }

  deleteMsg = (msgId) => {
    // TODO [back]
    this.msgService.delete(msgId);
    this.salon.msgs = this.salon.msgs.filter(msg => msg.id != msgId);
    this.groupMsgByDay();
  }
}
// TODO [back]
let nextId = 1_000;

/** Returns true if the 2 datetime are on the same day */
const isSameDay = (date1, date2) => {
  return date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear();
}
