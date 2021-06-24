import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserLocalStorage } from 'src/app/models/user/userLocalStorage';
import { HeaderService } from 'src/app/services/header.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() colors = new EventEmitter();

  text = "";

  user: UserLocalStorage;
  teamId: string;
  salonId: string;

  constructor(private headerService: HeaderService, private router: Router, private storageService: StorageService) { }

  ngOnInit(): void {
    this.headerService.register(this);
    this.storageService.subscribe("user", user => this.user = user)
    this.updateHeader(this.router.url);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd)
        this.updateHeader(event.urlAfterRedirects);
    });
  }

  // =========================================================================================

  updateHeader(path: string) {
    if (path.startsWith("/teamSelect"))
      this.text = "Equipes";
    else if (path.startsWith("/login"))
      this.text = "Connexion";
    else if (path.startsWith("/404"))
      this.text = "404";
    else if (path.startsWith("/user"))
      this.text = "Paramètres utilisateur";
    else if (path.startsWith("/privateMessages"))
      this.text = "Messages privés";
    else if (path.startsWith("/teamMessages")) {
      let split = this.router.url.split("/");
      this.text = this.user.members.find(member => member.team.id == split[2]).team.name;
    }
  }

  // =========================================================================================

  setText(text: string) {
    this.text = text;
  }

  // =========================================================================================

  openColors = () => {
    this.colors.emit("");
  }
}
