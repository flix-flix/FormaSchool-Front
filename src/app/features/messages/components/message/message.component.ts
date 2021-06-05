import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MsgThreadComponent } from '../msg-thread/msg-thread.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() msg: Message;

  constructor() {
  }

  ngOnInit(): void { }

  /** Open the emoji selector */
  emoji = () => {
    // TODO Emoji selector
    alert("TODO Emoji")
  }

  /** Edit the message */
  edit = () => {
    // TODO Edit the msg
    alert("TODO Edit")
  }

  /** Delete the message */
  delete = () => {
    // TODO Delete the message
    alert("TODO Delete")
  }

  /** Open the options selector */
  other = () => {
    // TODO Open other option
    alert("TODO Other options")
  }

  /** Reply to the message */
  reply = () => {
    // TODO Reply to the message
    alert("TODO Reply")
  }
}
