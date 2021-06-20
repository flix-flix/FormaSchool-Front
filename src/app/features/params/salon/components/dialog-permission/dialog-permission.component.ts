import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { MemberUserNamePict } from 'src/app/models/member/MemberUserNamePict';
import { RoleWithoutRights } from 'src/app/models/role/roleWithoutRights';
import { MemberService } from 'src/app/services/member.service';
import { PermissionService } from 'src/app/services/permission.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-dialog-permission',
  templateUrl: './dialog-permission.component.html',
  styleUrls: ['./dialog-permission.component.css']
})
export class DialogPermissionComponent implements OnInit {

  @Input() salonId: string;
  @Output() createEvent = new EventEmitter<{}>();
  members: MemberUserNamePict[];
  roles: RoleWithoutRights[];
  selectedMembre: MemberUserNamePict;
  selectedRole: RoleWithoutRights;
  display: boolean = false;

  constructor(private permissionService: PermissionService, private memberService: MemberService, private roleService: RoleService) { }

  ngOnInit(): void {
  }

  /**
   * This function create a new permission from the member selected
   */
  createFromMember = () => {
    this.permissionService.saveFromMember(this.salonId, this.selectedMembre.id).subscribe(() => {
      this.createEvent.emit({
        create: true
      })
    })
    this.selectedMembre = null;
    this.display = false;
  }

  /**
   * This function create a new permission from the role selected
   */
  createFromRole = () => {
    this.permissionService.saveFromRole(this.salonId, this.selectedRole.id).subscribe(() => {
      this.createEvent.emit({
        create: true
      })
    });
    this.selectedRole = null;
    this.display = false;
  }
  /**
     * This function load members which dont have permission for this salon
     */
  loadMembersWithoutPermission = () => {
    this.memberService.findMembersInTeamWithoutPermissionForSalon(this.salonId).subscribe(members => {
      this.members = members;
    })
  }

  /**
   * This function load role which dont have permission for this salon
   */
  loadRolesWithoutPermission = () => {
    this.roleService.findRoleWithoutRightsInTeamWithoutPermission(this.salonId).subscribe(roles => {
      this.roles = roles;
    })
  }
  /**
   * This function load dialog and display it 
   */
  showDialog() {
    this.loadMembersWithoutPermission();
    this.loadRolesWithoutPermission();
    this.display = true;
  }

}
