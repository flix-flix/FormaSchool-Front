import { Component, Input, OnInit } from '@angular/core';
import { Log } from '../../../../../../models/log';

@Component({
  selector: 'app-log-salon',
  templateUrl: './log-salon.component.html',
  styleUrls: ['./log-salon.component.css']
})
export class LogSalonComponent implements OnInit {

  @Input() log: Log;
  constructor() { }

  ngOnInit(): void {

  }

}
