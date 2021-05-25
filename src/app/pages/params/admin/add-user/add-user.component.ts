import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { creationUser } from 'src/app/models/creationUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      password: [''],
      email: [''],
      picture: ['']
    })
  }

  ngOnInit(): void {

  }

  /**
   * This function allows us to save a user
   */
  save = () => {
    let user: creationUser = this.userForm.value;
    let idRetour = this.userService.save(user);
    alert(`L'utilisateur a bien été créé avec l'id ${idRetour}`)
  }

}
