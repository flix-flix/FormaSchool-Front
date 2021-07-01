import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleCreate } from 'src/app/models/role/roleCreate';
import { Role } from 'src/app/models/role/role';
import { RoleWithoutRights } from 'src/app/models/role/roleWithoutRights';
import { RoleService } from 'src/app/services/role.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-roles',
  templateUrl: './team-roles.component.html',
  styleUrls: ['./team-roles.component.css']
})
export class TeamRolesComponent implements OnInit {

  role: Role;
  roles: RoleWithoutRights[];
  teamId: string;

  constructor(private roleService: RoleService, private teamService: TeamService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.parent.paramMap.subscribe(params => {
      this.teamId = params.get("teamId");
    });
    this.roleService.findAllWithoutRightsByTeamId(this.teamId).subscribe(roles => {
      this.roles = roles;
      if (this.roles && this.roles.length != 0) {
        this.roleChoosen(this.roles[0].id);
      }
    });
  }

  /**
   * This function refresh the list of roles
   */
  refreshRoles = () => {
    this.roleService.findAllWithoutRightsByTeamId(this.teamId).subscribe(roles => {
      this.roles = roles;
    });
  }

  /**
   * This function refresh the page with the role choosen
   * @param id the id of the role choosen
   */
  roleChoosen = (id: string) => {
    this.roleService.findRoleById(id).subscribe(role => {
      this.role = role;
    });
  }

  /**
   * This function allows you to create a new role
   */
  addNewRole = () => {
    this.roleService.save(this.teamId, { name: "nouveau role", color: "#A2D0EA" }).subscribe(role => {
      this.refreshRoles();
    });
  }

  /**
   * This function allows us to update a role
   */
  update = () => {
    this.roleService.update(this.role).subscribe(() => {
      this.refreshRoles();
    });
  }

  /**
   * Change the color of the role
   * @param color color you want to add
   */
  updateColor = (color: string) => {
    this.role.color = color;
  }

  /**
   * Delete a role 
   * @param role id of the role
   */
  deleteRole = (role: RoleWithoutRights) => {
    this.roleService.delete(this.teamId, role.id).subscribe(() => {
      this.roleService.findAllWithoutRightsByTeamId(this.teamId).subscribe(roles => {
        this.roles = roles;
        if (this.roles.length != 0) {
          this.roleChoosen(this.roles[0].id);
        }
        else {
          this.role = null;
        }
      });
    });
  }
}
