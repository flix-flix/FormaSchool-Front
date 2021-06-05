import { Component, Input, OnInit } from '@angular/core';
import { UserNamePict } from 'src/app/models/userNamePict';
import { UserService } from 'src/app/services/user.service';
import { Log } from '../../models/log';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  @Input() log: Log;
  user: UserNamePict;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = UserService.generateUserNamePicture(this.log.userId);
  }

}
