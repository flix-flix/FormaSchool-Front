import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.css']
})
export class TeamSelectComponent implements OnInit {
// c'est ici qu'il faut ajouter liste compléte des équipes
teams = []
  constructor(private service : TeamService) { }

  ngOnInit(): void {
    this.teams = this.service.afficheEquipes(0);
  }

}
