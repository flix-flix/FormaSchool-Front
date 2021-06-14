import { Component, Input, OnInit } from '@angular/core';
import { RoleWithoutRights } from 'src/app/models/role/roleWithoutRights';
import { UserHasRole } from 'src/app/models/user/userHasRole';
import { RoleService } from 'src/app/services/role.service';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-line-user-members',
  templateUrl: './line-user-members.component.html',
  styleUrls: ['./line-user-members.component.css']
})
export class LineUserMembersComponent implements OnInit {

  //@Input() roles: RoleWithoutRights[];
  @Input() user: UserHasRole;
  rolesMissing: RoleWithoutRights[];
  roleChoosen: RoleWithoutRights;

  constructor(private teamService: TeamService) {
  }

  ngOnInit(): void {
    console.log(this.user.roles);
    this.findRoleMissing();
  }


  findRoleMissing = () => {
    this.rolesMissing = [];
    let rolesId: number[];
    this.teamService.findRolesByTeamId(1).subscribe(roles => {
      rolesId = roles;
      rolesId.forEach(id => {
        if (!this.user.roles.includes(id)) {
          RoleService.findWithoutRightsById("" + id).subscribe(role => {
            this.rolesMissing.push(role);
          })
        }
      });
    });
    console.log(this.user.roles);
    console.log(this.user.roles.includes(1));
  }

  /*findIdIsInside = (id: number) => {
    this.user.roles.forEach(element => {
      if (element.)
      
    });
  }*/

  /**
   * This function refresh the page with the role choosen
   * @param id the id of the role choosen
   
  roleChoosen = (id: number) => {
    let newRole: Role = this.roleService.findRoleById(id);
    console.log("roleChoosen ", newRole);
    //TODO Call service Add Role
  }*/



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
