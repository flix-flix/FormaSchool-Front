import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { userCreation } from 'src/app/models/user/userCreation';
import { LogService } from 'src/app/services/log.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-identity',
  templateUrl: './user-identity.component.html',
  styleUrls: ['./user-identity.component.css']
})
export class UserIdentityComponent implements OnInit {

userProfile: FormGroup;

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
  let user: userCreation = this.userProfile.value;
  this.userService.save(user).subscribe(user => {
    alert()
  });
}

}
