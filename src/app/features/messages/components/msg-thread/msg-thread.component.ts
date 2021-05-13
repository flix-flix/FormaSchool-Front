import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-msg-thread',
  templateUrl: './msg-thread.component.html',
  styleUrls: ['./msg-thread.component.css']
})
export class MsgThreadComponent implements OnInit {

  @Input() salon;

  /** Messages grouped by date and sorted by time */
  msgs: Message[][];

  constructor() { }

  ngOnInit(): void {
    this.groupMsgByDay();
  }

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
}

/** Returns true if the 2 datetime are on the same day */
const isSameDay = (date1, date2) => {
  return date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear();
}
