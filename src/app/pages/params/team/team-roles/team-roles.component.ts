import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createRole } from 'src/app/features/roles/models/createRole';
import { Role } from 'src/app/features/roles/models/role';
import { RoleWithoutRights } from 'src/app/features/roles/models/roleWithoutRights';
import { RoleService } from 'src/app/features/roles/services/role.service';

@Component({
  selector: 'app-team-roles',
  templateUrl: './team-roles.component.html',
  styleUrls: ['./team-roles.component.css']
})
export class TeamRolesComponent implements OnInit {

  role: Role;
  roles: RoleWithoutRights[];

  constructor(private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.refreshRoles();
    this.roleChoosen(this.roles[0].id);
  }

  /**
   * This function refresh the list of roles
   */
  refreshRoles = () => {
    this.roles = this.roleService.findAllWithoutRights();
  }

  /**
   * This function refresh the page with the role choosen
   * @param id the id of the role choosen
   */
  roleChoosen = (id: number) => {
    let newRole: Role = this.roleService.findRoleById(id);
    this.role = newRole;
  }

  /**
   * This function allows you to create a new role
   */
  addNewRole = () => {
    //TODO include the teamId instead of "1"
    this.roleService.save(1, new createRole("nouveau role", "#A2D0EA"));
    this.refreshRoles();
  }

  /**
   * This function allows us to update a role
   */
  update = () => {
    this.roleService.update(this.role);
    this.refreshRoles();
  }

  updateColor = (color: string) => {
    this.role.color = color;
  }
}
