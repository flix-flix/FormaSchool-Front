import { Component, Input, OnInit } from '@angular/core';
import { Role } from 'src/app/features/roles/models/role';
import { RoleWithoutRights } from 'src/app/features/roles/models/roleWithoutRights';
import { RoleService } from 'src/app/features/roles/services/role.service';
import { UserHasRole } from 'src/app/models/userHasRole';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-line-user-members',
  templateUrl: './line-user-members.component.html',
  styleUrls: ['./line-user-members.component.css']
})
export class LineUserMembersComponent implements OnInit {


  @Input() roles: Role[];
  @Input() user: UserHasRole;
  rolesMissing: RoleWithoutRights[];

  constructor(private roleService: RoleService, private teamService: TeamService) {
  }

  ngOnInit(): void {

    //this.roleChoosen(this.roles[0].id);
  }

  /**
* This function refresh the list of roles
*/
  refreshRoles = () => {
    this.rolesMissing = [];
    let rolesId: number[] = this.teamService.findRolesByTeamId(1);
    rolesId.forEach(id => {
      this.rolesMissing.push(RoleService.findWithoutRightsById(id));
    });
  }

  /**
   * This function refresh the page with the role choosen
   * @param id the id of the role choosen
   */
  roleChoosen = (id: number) => {
    let newRole: Role = this.roleService.findRoleById(id);
    console.log("roleChoosen ", newRole);
    //TODO Call service Add Role
  }



  ajouteRole = () => { }
  /*for (let indexRole = 0; indexRole = this.roles.length; indexRole++) {
    /*for (let indexUser = 0; indexUser = this.user.roles.length; indexUser++) {
      if (this.user.roles[indexUser] == this.roles[indexRole]) {
        continue here;
      }
    }
    this.possibleRoles.push(this.roles[indexRole])
    this.roles.filter(this.user.roles.include())
  }

}*/




}
