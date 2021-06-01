import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessageComponent implements OnInit {

  @Input() msg: Message;

  emojis: { name: string, users: string[], on: boolean }[] = [
    { name: "red_apple", users: ["Félix", "Luca"], on: true },
    { name: "shamrock", users: ["Luca", "Jason", "Bouchaib"], on: false },
    { name: "bagel", users: ["Félix", "Luca", "Jason", "Bouchaib"], on: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

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
