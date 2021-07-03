import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class ParamsTeamTemplateComponent implements OnInit {

  buttons = [
    { link: "summary", text: "Resumé" },
    { link: "roles", text: "Rôles" },
    { link: "members", text: "Membres" },
    { link: "emojis", text: "Emojis" },
    { link: "logs", text: "Logs" },
  ];
  teamId = "und3f1n3d";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => this.teamId = params.get("teamId"));
  }
}
