import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.css']
})
export class TeamSelectComponent implements OnInit {

  teams = []

  constructor(private service: TeamService) { }

  ngOnInit(): void {
    this.service.afficheEquipes().subscribe(listTeam => {
      this.teams = listTeam;
    });
  }

}
