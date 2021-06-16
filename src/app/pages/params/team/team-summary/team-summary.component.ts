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

  team: TeamNameDescPict;
  teamId: string;

  constructor(
    private service: TeamService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.parent.paramMap.subscribe(params => {
      this.teamId = params.get("teamId");
    })


    this.service.findNamePicDescById(this.teamId).subscribe(team => {
      this.team = team;
    })
  }

  teamUpdate = (teamId: string) => {
    this.router.navigate([`${environment.apiUrl}/team/${teamId}/summaryUpdate`])
  }

  /*delete = () => {
    this.service.delete(this.team.id).subscribe( () => {
      this.router.navigate(['/teams']);
    });
  }*/
}
