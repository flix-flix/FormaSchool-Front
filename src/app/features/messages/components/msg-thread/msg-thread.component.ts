import { AfterViewChecked, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-msg-thread',
  templateUrl: './msg-thread.component.html',
  styleUrls: ['./msg-thread.component.css']
})
export class MsgThreadComponent implements OnInit {
  @ViewChild("scrollMe") private msgThread: ElementRef;
  @ViewChild("writer") private msgWriter: ElementRef;
  @ViewChildren("msgs") private msgComponents: QueryList<any>;

  @Input() salon;

  /** Messages grouped by date and sorted by time */
  msgs: Message[][];

  constructor() { }

  ngOnInit(): void {
    this.groupMsgByDay();
  }

  ngAfterViewInit() {
    if (this.msgComponents?.changes != undefined)
      this.msgComponents.changes.subscribe(() => {
        this.scrollToBottom();
      })
  }

  /** Scroll the view to the last message */
  scrollToBottom(): void {
    try {
      this.msgThread.nativeElement.scrollTop = this.msgThread.nativeElement.scrollHeight;
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

  // TODO Allow the message to be added before
  /** Add the message to the day-grouped messages */
  addMsg = (msg) => {
    msg = this.processMsg(msg);

    if (this.msgs.length == 0 || !isSameDay(msg.date, this.msgs[this.msgs.length - 1][0].date))
      this.msgs.push([]);
    this.msgs[this.msgs.length - 1].push(msg);
  }

  /** Process the message content to add html balises */
  processMsg = (msg: Message) => {
    let html = msg.content.replace(/\n/g, "<br>");

    return new Message(msg.id, msg.sender, msg.date, html);
  }

  // =========================================================================================

  // TODO [service]
  /** Send the written message  */
  sendMsg = (text) => {
    this.addMsg(new Message(nextId++, 0, new Date(), text));
  }

  /** Called on msgwriter (keyup) */
  keyUp = (event) => {
    if (event.keyCode == 13)// Enter
      this.scrollToBottom();
  }
}
// TODO [back]
let nextId = 100;

/** Returns true if the 2 datetime are on the same day */
const isSameDay = (date1, date2) => {
  return date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear();
}
