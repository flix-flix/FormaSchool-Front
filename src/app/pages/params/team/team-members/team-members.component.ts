import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/features/params/team/roles/models/role';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {


  users: Member[];

  constructor(private members: MemberService) { }

  ngOnInit(): void {

    this.users = this.members.findAllMemberRoles();
  }




}
