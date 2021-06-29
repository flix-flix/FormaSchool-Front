import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNamePict } from 'src/app/models/user/userNamePict';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  env = environment;

  user: UserNamePict;

  displayMenu = false;

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.storageService.subscribe("user", user => this.user = user);
  }

  logout = () => {
    this.displayMenu = false;
    this.storageService.clear("user");
    this.router.navigate(["/login"]);
  }

  userSettings() {
    this.displayMenu = false;
    this.router.navigate(["/user"]);
  }
}
