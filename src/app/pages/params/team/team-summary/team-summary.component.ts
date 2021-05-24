import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { creationTeam } from 'src/app/models/creationTeam';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-summary',
  templateUrl: './team-summary.component.html',
  styleUrls: ['./team-summary.component.css']
})
export class TeamSummaryComponent implements OnInit {

  team: creationTeam;
  constructor(
    private service: TeamService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.service.findNamePicDescById(+params.get("id")).subscribe(data => {
        this.team = data;
      })
    });
  }

  /*delete = () => {
    this.service.delete(this.team.id).subscribe( () => {
      this.router.navigate(['/teams']);
    });
  }*/

}
