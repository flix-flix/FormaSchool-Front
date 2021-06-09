import { Component, OnInit } from '@angular/core';
import { UserNamePict } from 'src/app/models/userNamePict';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user = new UserNamePict(0, "-", "-", "5.jpg");

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findNamePictDefault().subscribe(user => this.user = user);
  }

  openUserParams = () => {
    alert("TODO userParams");
  }
}
