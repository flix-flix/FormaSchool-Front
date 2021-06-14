import { Component, Input, OnInit } from '@angular/core';
import { Log } from '../../../../../../models/log';

@Component({
  selector: 'app-log-emoji',
  templateUrl: './log-emoji.component.html',
  styleUrls: ['./log-emoji.component.css']
})
export class LogEmojiComponent implements OnInit {

  @Input() log: Log;
  constructor() { }

  ngOnInit(): void {
  }
}
