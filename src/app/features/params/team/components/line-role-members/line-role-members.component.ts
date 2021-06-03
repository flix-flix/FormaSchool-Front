import { Component, Input, OnInit } from '@angular/core';
import { RoleService } from 'src/app/features/params/team/roles/services/role.service';
import { RoleWithoutRights } from '../../roles/models/roleWithoutRights';

@Component({
  selector: 'app-line-role-members',
  templateUrl: './line-role-members.component.html',
  styleUrls: ['./line-role-members.component.css']
})
export class LineRoleMembersComponent implements OnInit {

  @Input() roleId: number;
  role: RoleWithoutRights;

  constructor() { }

  ngOnInit(): void {

    console.log(this.roleId)
    this.role = RoleService.findWithoutRightsById(this.roleId);
  }

}
