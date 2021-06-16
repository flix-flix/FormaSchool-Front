import { Component, OnInit } from '@angular/core';
import { UserNamePict } from 'src/app/models/user/userNamePict';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user: UserNamePict;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  openUserParams = () => {
    alert("TODO userParams");
  }
}
