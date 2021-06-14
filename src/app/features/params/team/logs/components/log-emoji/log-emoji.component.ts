import { Component, Input, OnInit } from '@angular/core';
import { TeamNamePict } from 'src/app/models/team/teamNamePict';
import { UserNamePict } from 'src/app/models/user/userNamePict';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { Log } from '../../models/log';

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
