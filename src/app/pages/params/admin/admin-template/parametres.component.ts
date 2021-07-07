import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParamsAdminTemplateComponent implements OnInit {

  buttons = [
    { link: "createUser", text: "Ajouter un utilisateur" },
    { link: "createTeam", text: "Ajouter une équipe" },
    { link: "addUserToTeam", text: "Ajouter un utilisateur à une équipe" },
    { link: "adminLogs", text: "Logs Admin" },
    { link: "adminEmojis", text: "Emojis Admin" },
  ];
  previous = "";

  constructor() { }

  ngOnInit(): void {
  }
}
