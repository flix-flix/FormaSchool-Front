import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member/member';
import { MemberRoles } from 'src/app/models/member/memberRoles';
import { Role } from 'src/app/models/role/role';

import { RoleWithoutRights } from 'src/app/models/role/roleWithoutRights';
import { MemberService } from 'src/app/services/member.service';
import { RoleService } from 'src/app/services/role.service';


@Component({
  selector: 'app-line-user-members',
  templateUrl: './line-user-members.component.html',
  styleUrls: ['./line-user-members.component.css']
})
export class LineUserMembersComponent implements OnInit {

  teamId: string;
  memberId: string;
  @Input() member: MemberRoles;
  selectedRole: RoleWithoutRights;
  roles: RoleWithoutRights[];


  constructor(private activatedRoute: ActivatedRoute, private roleService: RoleService, private memberService: MemberService) { }

  ngOnInit(): void {
    this.activatedRoute.parent.paramMap.subscribe(params => {
      this.teamId = params.get("teamId");
    })
    this.findRoleMissing();
  }

  refresh = () => {
    this.memberService.findRolesByMember(this.member.id).subscribe(roles => {
      this.member.roles = roles;
      this.findRoleMissing();
    });
  }
  /*
    Aller chercher tous les roles
    Compare la liste des rôles de l'utilisateur avec la liste de tous les rôles
    Stocker les roles manquant pour afficher ça dans le dropdown
  */
  findRoleMissing = () => {
    this.roleService.findAllWithoutRightsByTeamId(this.teamId).subscribe(roles => {
      this.roles = roles.filter(role => !this.member.roles.find(r => r.id == role.id));
    });
  }

  addRole = () => {
    console.log(this.member);
    console.log(this.selectedRole);
    this.memberService.addRoleToMember(this.member.id, this.selectedRole.id).subscribe(member => {
      this.refresh();
    });
  }

  deleteRole = (role: RoleWithoutRights) => {
    this.memberService.deleteRoleToMember(this.member.id, role.id).subscribe(() => {
      this.refresh();
    });
  }
}
