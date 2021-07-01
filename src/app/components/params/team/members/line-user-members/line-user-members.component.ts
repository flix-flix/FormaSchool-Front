import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member/member';
import { MemberRoles } from 'src/app/models/member/memberRoles';
import { Role } from 'src/app/models/role/role';

import { RoleWithoutRights } from 'src/app/models/role/roleWithoutRights';
import { RoleService } from 'src/app/services/role.service';



@Component({
  selector: 'app-line-user-members',
  templateUrl: './line-user-members.component.html',
  styleUrls: ['./line-user-members.component.css']
})
export class LineUserMembersComponent implements OnInit {

  teamId: string;
  @Input() member: MemberRoles;
  role: RoleWithoutRights;
  roles: RoleWithoutRights[];
  missingRoles: RoleWithoutRights[];

  constructor(private activatedRoute: ActivatedRoute, private roleService: RoleService) { }
  ngOnInit(): void {
    console.log(this.member)
    this.findRoleMissing();
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
    console.log(id);
    // this.roles.filter(this.member.roles.include())
  }
  /*
    Aller chercher tous les roles
    Compare la liste des rôles de l'utilisateur avec la liste de tous les rôles
    Stocker les roles manquant pour afficher ça dans le dropdown
  */
  findRoleMissing = () => {
    this.roleService.findAllWithoutRightsByTeamId(this.member.id).subscribe(roles => {
      this.roles = roles.filter(role => !this.member.roles.includes(role))
    });
  }

  /*findIdIsInside = (id: number) => {
    this.user.roles.forEach(element => {
      if (element.)
      
    });
  }*/

  /**
   * This function refresh the page with the role choosen 
   * @param id the id of the role choosen*/

  /* roleChoosenn = (id: string) => {
     let newRole: Role = this.roleService.findRoleById(id);
     console.log("roleChoosen ", newRole);
     //TODO Call service Add Role
   }*/



  addRole = () => { }
  // TODO find role missing in the dropdown
  /*  this.possibleRoles.push(this.roles[indexRole])
  this.roles.filter(this.user.roles.include())
}*/
}
