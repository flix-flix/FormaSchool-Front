import { Component, Input, OnInit } from '@angular/core';
import { Log } from '../../../../../models/log';

@Component({
  selector: 'app-log-user',
  templateUrl: './log-user.component.html',
  styleUrls: ['./log-user.component.css']
})
export class LogUserComponent implements OnInit {

  @Input() log: Log;
  constructor() { }

  ngOnInit(): void {

  }

}
