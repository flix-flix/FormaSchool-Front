import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Role } from '../models/role';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

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
      let idRetour: number = this.roleService.save(role);
      alert(`Le role a bien été crée avec l'id ${idRetour}`);
    }
    else {
      alert("Le nom ne peut pas être vide");
    }
  }

}
