import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserConnect } from 'src/app/models/user/userConnect';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userProfile: FormGroup;
  value: string = '';


  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userProfile = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit = () => {
    this.userService.connect(this.userProfile.value)
      .subscribe(user => localStorage.setItem("user", JSON.stringify(user)));
  }
}
