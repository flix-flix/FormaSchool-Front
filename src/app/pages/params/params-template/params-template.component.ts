import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-params-template',
  templateUrl: './params-template.component.html',
  styleUrls: ['./params-template.component.css']
})
export class ParamsTemplateComponent implements OnInit {

  menus = {
    admin: {
      buttons: [
        { link: "createUser", text: "Ajouter un utilisateur" },
        { link: "createTeam", text: "Ajouter une équipe" },
        { link: "addUserToTeam", text: "Ajouter un utilisateur à une équipe" },
        { link: "adminLogs", text: "Logs Admin" },
        { link: "adminEmojis", text: "Emojis Admin" },
      ],
      // TODO [Improve] Redirect to last visited page
      previous: ""
    },
    team: {
      buttons: [
        { link: "summary", text: "Resumé" },
        { link: "roles", text: "Rôles" },
        { link: "members", text: "Membres" },
        { link: "emojis", text: "Emojis" },
        { link: "logs", text: "Logs" },
      ],
      previous: ""
    },
    salon: {
      buttons: [
        { link: "summary", text: "Resumé" },
        { link: "permissions", text: "Permissions" },
      ],
      // TODO [Improve] Redirect to actual salon
      previous: "/teamSelect"
    },
    user: {
      buttons: [
        { link: "general", text: "Resumé" },
        // { link: "permissions", text: "Permissions" },
      ],
      previous: "/teamSelect"
    }
  }

  buttons;
  previous: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const url = this.router.url.split("/");

    this.buttons = this.menus[url[2]].buttons;
    this.previous = url[2] == "team" ? `/teamMessages/${url[3]}/redirect` : this.menus[url[2]].previous;
  }
}
