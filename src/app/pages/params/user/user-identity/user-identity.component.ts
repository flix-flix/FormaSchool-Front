import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { userCreation } from 'src/app/models/user/userCreation';
import { UserCreationWithFile } from 'src/app/models/user/userCreationWithFile';
import { LogService } from 'src/app/services/log.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-identity',
  templateUrl: './user-identity.component.html',
  styleUrls: ['./user-identity.component.css']
})
export class UserIdentityComponent implements OnInit {

userProfile: FormGroup;
file: File;

constructor(private fb: FormBuilder, private userService: UserService, private logService: LogService) {
  this.userProfile = this.fb.group({
    firstname: [''],
    lastname: [''],
    email: [''],
    age: [''],
    telephone: [''],
    password: [''],   
  })
}

ngOnInit(): void {
}

save = () => {
  if (this.file != null) {
    this.saveWithFile();
  }
  else {
    let user: userCreation = this.userProfile.value;
    this.userService.save(user).subscribe(user => {
      alert(`Le profile a bien été modifié`)
    });
  }
}

saveWithFile = () => {
  let user: UserCreationWithFile = this.userProfile.value;
  user.file = this.file;
  this.userService.saveWithFile(user);
}

getEvent = (element) => {
  this.file = element.file;
}

}
