import { Component, Input, OnInit } from '@angular/core';
import { UserNamePict } from 'src/app/models/user/userNamePict';
import { Log } from '../../../../../../models/log';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  @Input() log: Log;
  @Input() teamId: number;
  user: UserNamePict;

  constructor() { }

  ngOnInit(): void {
    this.user = this.log.user;
  }

  ddmmyyyy = (date: Date): string => {
    date = new Date(date);
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();

    return [(dd > 9 ? '' : '0') + dd,
    (mm > 9 ? '' : '0') + mm,
    date.getFullYear()
    ].join('/');
  };

}
