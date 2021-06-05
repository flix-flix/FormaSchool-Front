import { Component, Input, OnInit } from '@angular/core';
import { TeamNamePict } from 'src/app/models/teamNamePict';
import { UserNamePict } from 'src/app/models/userNamePict';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { Log } from '../../models/log';

@Component({
  selector: 'app-log-create-user',
  templateUrl: './log-create-user.component.html',
  styleUrls: ['./log-create-user.component.css']
})
export class LogCreateUserComponent implements OnInit {

  @Input() log: Log;
  user: UserNamePict;
  team: TeamNamePict;
  constructor() { }

  ngOnInit(): void {
    this.user = UserService.generateUserNamePicture(this.log.userId);
    this.team = TeamService.generateTeamNamePicture(this.log.teamId);
  }

}
