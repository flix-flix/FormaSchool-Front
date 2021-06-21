import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member/member';

import { RoleWithoutRights } from 'src/app/models/role/roleWithoutRights';
import { RoleService } from 'src/app/services/role.service';



@Component({
  selector: 'app-line-user-members',
  templateUrl: './line-user-members.component.html',
  styleUrls: ['./line-user-members.component.css']
})
export class LineUserMembersComponent implements OnInit {


  @Input() member: Member;
  rolesMissing: RoleWithoutRights[];
  roleChoosen: RoleWithoutRights;

  constructor(private activatedRoute: ActivatedRoute, private roleService: RoleService) {
  }

  ngOnInit(): void {
    console.log(this.member)
    this.findRoleMissing();

  }


  findRoleMissing = () => {

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
