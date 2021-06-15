import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userProfile: FormGroup;
  constructor(private fb: FormBuilder){
    this.userProfile = this.fb.group({
      login : ['', Validators.required],
      password : ['', Validators.required],
    });
  }

  ngOnInit(): void{
      }
  public value: string = '';    
  onSubmit= ()=>{
    alert("Bonjour " + this.userProfile.get("login").value + " et bienvenue !!");
  }
}
