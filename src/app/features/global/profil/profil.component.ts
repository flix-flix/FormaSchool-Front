import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNamePict } from 'src/app/models/user/userNamePict';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user: UserNamePict;

  displayMenu = false;

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.storageService.changes.subscribe(() => this.user = JSON.parse(localStorage.getItem("user")));
  }

  openUserParams = () => {
    // alert("TODO userParams");
    this.displayMenu = !this.displayMenu;
  }

  logout = () => {
    this.displayMenu = false;
    this.storageService.clear("user");
    this.router.navigate(["/login"]);
  }
}
