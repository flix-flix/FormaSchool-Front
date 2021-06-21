import { Component, Input, OnInit } from '@angular/core';
import { Log } from '../../../../../models/log';

@Component({
  selector: 'app-log-pin',
  templateUrl: './log-pin.component.html',
  styleUrls: ['./log-pin.component.css']
})
export class LogPinComponent implements OnInit {

  @Input() log: Log;
  constructor() { }

  ngOnInit(): void {

  }

}
