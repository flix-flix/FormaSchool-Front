import { Component, Input, OnInit } from '@angular/core';
import { TeamNamePict } from 'src/app/models/teamNamePict';
import { UserNamePict } from 'src/app/models/userNamePict';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { Log } from '../../models/log';

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
