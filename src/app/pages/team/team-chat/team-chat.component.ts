import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/features/messages/models/message';

@Component({
  selector: 'app-team-chat',
  templateUrl: './team-chat.component.html',
  styleUrls: ['./team-chat.component.css']
})
export class TeamChatComponent implements OnInit {

  /** List of all messages */
  _msgs: Message[] = [
    new Message(0, 0, new Date("2021-05-01T17:35:21"), "Salut"),
    new Message(1, 1, new Date("2021-05-01T17:37:31"), "Bien ou bien ?"),
    new Message(2, 2, new Date("2021-05-01T17:43:07"), "Hi, salut les mecs"),
    new Message(3, 3, new Date("2021-05-02T09:07:44"), "Guys ?"),
  ];

  /** Messages grouped by date and sorted by time */
  msgs: Message[][] = [
    [
      new Message(0, 0, new Date("2021-05-01T17:35:21"), "Salut"),
      new Message(1, 1, new Date("2021-05-01T17:37:31"), "Bien ou bien ?"),
      new Message(2, 2, new Date("2021-05-01T17:43:07"), "Hi, salut les mecs")
    ],
    [
      new Message(3, 3, new Date("2021-05-02T09:07:44"), "Guys ?")
    ]
  ];

  constructor() { }

  ngOnInit(): void {
    this._msgs
  }

}
