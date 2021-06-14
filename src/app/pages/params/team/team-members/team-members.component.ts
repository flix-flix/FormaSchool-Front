import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role/role';
import { UserHasRole } from 'src/app/models/user/userHasRole';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {


  users: UserHasRole[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.findAllUserRoles().subscribe(users => {
      this.users = users;
    });
  }




}
