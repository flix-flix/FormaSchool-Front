import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from '../../../../models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Output() delete = new EventEmitter();

  @Input() msg: Message;

  constructor() { }

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
  deleteClick = () => {
    if (confirm("Voulez vous supprimer ce message"))
      this.delete.emit(this.msg.id);
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
