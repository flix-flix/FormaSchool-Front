import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { createRole } from 'src/app/features/params/team/roles/models/createRole';
import { Role } from 'src/app/features/params/team/roles/models/role';
import { RoleService } from 'src/app/features/params/team/roles/services/role.service';
import { Member } from 'src/app/models/member';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-salon-permissions',
  templateUrl: './salon-permissions.component.html',
  styleUrls: ['./salon-permissions.component.css']
})
export class SalonPermissionsComponent implements OnInit {
  members: Member[];
  teamId: number;
  roleForm: FormGroup;
  listOfRights: { desc: string, value: boolean }[];
  nextId = 100;

  constructor(private fb: FormBuilder, private roleService: RoleService, private teamService: TeamService, private router: ActivatedRoute) {
    this.roleForm = this.fb.group({
      name: [''],
      color: [''],
      rights: this.fb.array([true])
    })
  }

  ngOnInit(): void {
    this.router.parent.paramMap.subscribe(params => {
      this.teamId = +params.get("salonId");
      console.log(this.teamId)
    })
    this.teamService.findMembersByTeamId(this.teamId).subscribe(members => {
      this.members = members;
    });
    //this.listOfRights = this.roleService.getListOfRights();
  }

  /**
   * This function allows us to save a role
   * 
 
  save = () => {
    if (this.roleForm.get("name").value != "" && this.roleForm.get("name").value != null) {
      let role: Role = new Role(this.nextId++, this.roleForm.get("name").value,
        this.roleForm.get("color").value,
        this.listOfRights);
      //TODO replace 1 by the id of the actual team
      let idRetour: number = this.roleService.saveUpdateRole(role);
      alert(`Le role a bien été crée avec l'id ${idRetour}`);
    }
    else {
      alert("Le nom ne peut pas être vide");
    }
  }*/
}
