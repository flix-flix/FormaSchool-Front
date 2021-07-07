import { Component, Input, OnInit } from '@angular/core';
import { UserNamePict } from 'src/app/models/user/userNamePict';
import { environment } from 'src/environments/environment';
import { Log } from '../../../../../models/log';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  env = environment;

  @Input() log: Log;
  @Input() teamId: string;
  user: UserNamePict;

  constructor() { }

  ngOnInit(): void {
    this.user = this.log.user;
  }

  ddmmyyyy = (date: Date): string => {
    var mm = date[1]; // getMonth() is zero-based
    var dd = date[2];

    return [(dd > 9 ? '' : '0') + dd,
    (mm > 9 ? '' : '0') + mm,
    date[0]
    ].join('/');
  };

}
