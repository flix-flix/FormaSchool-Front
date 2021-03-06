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

  hideMenu = true;

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.storageService.subscribe("user", user => this.user = user);
  }

  /** Disconnect the user */
  logout = () => {
    // TODO clear salons
    this.hideMenu = true;
    this.storageService.clear("user");
    this.router.navigate(["/login"]);
    // TODO request logout to server
  }

  /** Redirects to the user settings */
  userSettings() {
    this.hideMenu = true;
    this.router.navigate([`/params/user/${this.user.id}/`]);
  }
}
