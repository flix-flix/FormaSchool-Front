import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createRole } from 'src/app/features/params/team/roles/models/createRole';
import { Role } from 'src/app/features/params/team/roles/models/role';
import { RoleWithoutRights } from 'src/app/features/params/team/roles/models/roleWithoutRights';
import { RoleService } from 'src/app/features/params/team/roles/services/role.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-roles',
  templateUrl: './team-roles.component.html',
  styleUrls: ['./team-roles.component.css']
})
export class TeamRolesComponent implements OnInit {

  role: Role;
  roles: RoleWithoutRights[];
  teamId: number;

  constructor(private roleService: RoleService, private teamService: TeamService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.parent.paramMap.subscribe(params => {
      this.teamId = +params.get("teamId");
    })
    this.refreshRoles();
    if (this.roles.length != 0) {
      this.roleChoosen(this.roles[0].id);
    }
  }

  /**
   * This function refresh the list of roles
   */
  refreshRoles = () => {
    this.roles = [];
    let rolesId: number[];
    this.teamService.findRolesByTeamId(this.teamId).subscribe(roles => {
      rolesId = roles;
      rolesId.forEach(id => {
        RoleService.findWithoutRightsById(id).subscribe(role => {
          this.roles.push(role);
        })
      });
    });
  }

  /**
   * This function refresh the page with the role choosen
   * @param id the id of the role choosen
   */
  roleChoosen = (id: number) => {
    this.roleService.findRoleById(id).subscribe(role => {
      this.role = role;
    });
  }

  /**
   * This function allows you to create a new role
   */
  addNewRole = () => {
    let idRole: number;
    this.roleService.save(new createRole("nouveau role", "#A2D0EA")).subscribe(retour => {
      idRole = retour;
      this.teamService.addRoleToTeam(this.teamId, idRole);
      this.refreshRoles();
      this.roleChoosen(this.roles[0].id);
    });
  }

  /**
   * This function allows us to update a role
   */
  update = () => {
    this.roleService.update(this.role);
    this.refreshRoles();
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
    this.teamService.deleteRoleToTeam(this.teamId, role.id);
    this.roleService.delete(role.id);
    this.refreshRoles();
    if (this.roles.length != 0) {
      this.roleChoosen(this.roles[0].id);
    }
  }
}
