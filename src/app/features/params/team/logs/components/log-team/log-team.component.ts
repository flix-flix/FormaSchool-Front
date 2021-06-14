import { Component, Input, OnInit } from '@angular/core';
import { TeamNamePict } from 'src/app/models/team/teamNamePict';
import { UserNamePict } from 'src/app/models/user/userNamePict';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { Log } from '../../models/log';

@Component({
  selector: 'app-log-team',
  templateUrl: './log-team.component.html',
  styleUrls: ['./log-team.component.css']
})
export class LogTeamComponent implements OnInit {

  @Input() log: Log;

  constructor() { }

  ngOnInit(): void {
  }

}
