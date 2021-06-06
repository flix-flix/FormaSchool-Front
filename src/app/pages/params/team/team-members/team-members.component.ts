import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/features/params/team/roles/models/role';
import { Members } from 'src/app/models/members';
import { MembersService } from 'src/app/services/members.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {


  users: Members[];

  constructor(private members: MembersService) { }

  ngOnInit(): void {

    this.users = this.members.findAllUserRoles();
  }




}
