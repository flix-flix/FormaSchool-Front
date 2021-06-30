import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member/member';
import { Role } from 'src/app/models/role/role';
import { RoleWithoutRights } from 'src/app/models/role/roleWithoutRights';
import { MemberService } from 'src/app/services/member.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {

  teamId: string;
  members: Member[];
  role: Role;
  roles: RoleWithoutRights[];

  constructor(private service: MemberService, private roleService: RoleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.parent.paramMap.subscribe(params => {
      this.teamId = params.get("teamId");
    });
    this.service.findMembersByTeamId(this.teamId).subscribe(members => {
      this.members = members
    });
  }


}
