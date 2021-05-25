import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Role } from 'src/app/features/roles/models/role';
import { RoleService } from 'src/app/features/roles/services/role.service';

@Component({
  selector: 'app-team-roles',
  templateUrl: './team-roles.component.html',
  styleUrls: ['./team-roles.component.css']
})
export class TeamRolesComponent implements OnInit {

  roleForm: FormGroup;
  listOfRights: { desc: string, value: boolean }[];

  constructor(private fb: FormBuilder, private roleService: RoleService) {
    this.roleForm = this.fb.group({
      name: [''],
      color: [''],
      rights: this.fb.array([true])
    })
  }

  ngOnInit(): void {
    this.listOfRights = this.roleService.getListOfRights();
  }

  /**
   * This function allows us to save a role
   */
  save = () => {
    if (this.roleForm.get("name").value != "" && this.roleForm.get("name").value != null) {
      let role: Role = new Role(this.roleForm.get("name").value,
        this.roleForm.get("color").value,
        this.listOfRights);
      //TODO replace 1 by the id of the actual team
      let idRetour: number = this.roleService.save(1, role);
      alert(`Le role a bien été crée avec l'id ${idRetour}`);
    }
    else {
      alert("Le nom ne peut pas être vide");
    }
  }
}
