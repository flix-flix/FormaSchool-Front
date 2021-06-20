import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamNameDescPict } from 'src/app/models/team/teamNameDescPict';
import { TeamService } from 'src/app/services/team.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-team-summary',
  templateUrl: './team-summary.component.html',
  styleUrls: ['./team-summary.component.css']
})
export class TeamSummaryComponent implements OnInit {
  env = environment;

  team: TeamNameDescPict;

  constructor(
    private service: TeamService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.parent.paramMap.subscribe(params => {
      this.service.findNamePicDescById(params.get("teamId")).subscribe(team => this.team = team);
    });
  }

  teamUpdate = (teamId: string) => {
    console.log(teamId);
    const URL = `/params/team/${teamId}/summaryUpdate`
    this.router.navigate([URL]);
    console.log(URL);

  }
}
