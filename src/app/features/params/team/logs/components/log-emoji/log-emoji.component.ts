import { Component, Input, OnInit } from '@angular/core';
import { TeamNamePict } from 'src/app/models/teamNamePict';
import { UserNamePict } from 'src/app/models/userNamePict';
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
  @Input() teamId: number;
  user: UserNamePict;
  team: TeamNamePict;
  constructor() { }

  ngOnInit(): void {
    this.user = UserService.generateUserNamePicture(this.log.userId);
    if (this.log.teamId != 0) {
      this.team = TeamService.generateTeamNamePicture(this.log.teamId);
    }
  }

  ddmmyyyy = (date: Date): string => {
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();

    return [(dd > 9 ? '' : '0') + dd,
    (mm > 9 ? '' : '0') + mm,
    date.getFullYear()
    ].join('/');
  };

}
