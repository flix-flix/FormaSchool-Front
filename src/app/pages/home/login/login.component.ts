import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userProfile: FormGroup;
  value: string = '';

  constructor(private fb: FormBuilder, private userService: UserService, private storageService: StorageService) {
    this.userProfile = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit = () => {
    this.userService.connect(this.userProfile.value)
      .subscribe(user => this.storageService.store("user", user));
  }
}
