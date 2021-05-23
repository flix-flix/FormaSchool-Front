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

  constructor() { }

  ngOnInit(): void {
  }

}
