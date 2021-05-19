import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-msg-thread',
  templateUrl: './msg-thread.component.html',
  styleUrls: ['./msg-thread.component.css']
})
export class MsgThreadComponent implements OnInit, AfterViewChecked {
  @ViewChild("scrollMe") private myScrollContainer: ElementRef;

  @Input() salon;

  /** Messages grouped by date and sorted by time */
  msgs: Message[][];

  constructor() { }

  ngOnInit(): void {
    this.groupMsgByDay();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.log(err);
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

  // TODO remove when back
  /** */
  addMsg = (msg) => {
    if (this.msgs.length == 0 || !isSameDay(msg.date, this.msgs[this.msgs.length - 1][0].date))
      this.msgs.push([]);
    this.msgs[this.msgs.length - 1].push(msg);
  }

  /** */
  sendMsg = (text) => {
    this.addMsg(new Message(count++, 0, new Date(), text));
  }
}

let count = 100;

/** Returns true if the 2 datetime are on the same day */
const isSameDay = (date1, date2) => {
  return date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear();
}
