import { Component, OnInit } from '@angular/core';

import { TeamService } from 'src/app/services/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionService } from 'src/app/services/permission.service';
import { PermissionMemberRoleWithoutRights } from 'src/app/models/permission/permissionMemberRoleWithoutRights';
import { PermissionRights } from 'src/app/models/permission/permissionRights';
import { SelectItemGroup } from 'primeng/api';
import { MemberService } from 'src/app/services/member.service';
import { RoleService } from 'src/app/services/role.service';
import { Role } from 'src/app/models/role/role';
import { RoleWithoutRights } from 'src/app/models/role/roleWithoutRights';
import { Member } from 'src/app/models/member/member';


@Component({
  selector: 'app-salon-permissions',
  templateUrl: './salon-permissions.component.html',
  styleUrls: ['./salon-permissions.component.css']
})
export class SalonPermissionsComponent implements OnInit {

  teamId: string;
  salonId: string;
  permissionsMembers: PermissionMemberRoleWithoutRights[];
  permissionsRoles: PermissionMemberRoleWithoutRights[];
  permissionChoosen: PermissionRights;

  members: Member[];
  roles: RoleWithoutRights[];
  selectedMembre: Member;
  selectedRole: RoleWithoutRights;

  display: boolean = false;

  constructor(private teamService: TeamService, private permissionService: PermissionService,
    private memberService: MemberService, private roleService: RoleService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.parent.paramMap.subscribe(params => {
      this.salonId = params.get("salonId");
      this.teamService.findTeamIdBySalonId(this.salonId).subscribe(team => {
        this.teamId = team.id;
      });
      this.permissionService.findPermissionBySalonId(this.salonId).subscribe(permissions => {
        this.permissionsMembers = permissions.filter(permission => permission.member != null);
        this.permissionsRoles = permissions.filter(permission => permission.role != null);
      })
    });
  }

  choosePermission = (permissionId: string) => {
    this.permissionService.findPermissionRightsByPermissionId(permissionId).subscribe(permission => {
      this.permissionChoosen = permission;
    })
  }

  update = () => {
    this.permissionService.updatePermission(this.permissionChoosen).subscribe();
  }

  showDialog() {
    this.display = true;

  }

  /**
   * This function create a new permission with the selected item in the list
   */
  create = () => {
    alert("toto");
  }
}
