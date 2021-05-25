import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { teamNameDescPict } from 'src/app/models/teamNameDescPict';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-summary',
  templateUrl: './team-summary.component.html',
  styleUrls: ['./team-summary.component.css']
})
export class TeamSummaryComponent implements OnInit {

  team: teamNameDescPict;

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
