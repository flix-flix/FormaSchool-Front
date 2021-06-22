import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { userCreation } from 'src/app/models/user/userCreation';
import { UserCreationWithFile } from 'src/app/models/user/userCreationWithFile';
import { LogService } from 'src/app/services/log.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  file: File;

  constructor(private fb: FormBuilder, private userService: UserService, private logService: LogService) {
    this.userForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      password: [''],
      email: [''],
    })
  }

  ngOnInit(): void {
  }

  /**
   * This function allows us to save a user
   */
  save = () => {
    if (this.file != null) {
      this.saveWithFile();
    }
    else {
      let user: userCreation = this.userForm.value;
      this.userService.save(user).subscribe(user => {
        alert(`L'utilisateur a bien été créé avec l'id ${user.id}`)
      });
    }
  }

  saveWithFile = () => {
    let user: UserCreationWithFile = this.userForm.value;
    user.file = this.file;
    this.userService.saveWithFile(user);
  }

  getEvent = (element) => {
    this.file = element.file;
  }

}
