import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamNameDescPict } from 'src/app/models/team/teamNameDescPict';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-summary',
  templateUrl: './team-summary.component.html',
  styleUrls: ['./team-summary.component.css']
})
export class TeamSummaryComponent implements OnInit {

  team: TeamNameDescPict;
  teamId: string;
  teamForm: FormGroup;
  constructor(private fb: FormBuilder, private teamService: TeamService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.teamForm = this.fb.group({
      name: "",
      desc: "",
      picture: "",
      id: -1
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => this.teamService.getTeamById(String(params.get("id"))).subscribe
      (team => this.teamForm.setValue(team)));
    this.activatedRoute.parent.paramMap.subscribe(params => {
      this.teamId = params.get("teamId");
    })


    this.teamService.findNamePicDescById(this.teamId).subscribe(team => {
      this.team = team;
    })

  }

  updateTeam = () => {
    this.teamService.updateTeamNameDescPic(this.teamForm?.value).subscribe(resp => {
      this.teamService.updateTeamNameDescPic(this.teamForm.value);
      this.router.navigate(["/teams" + this.teamId]);
    });
  }
}
  /*delete = () => {
this.service.delete(this.team.id).subscribe( () => {
this.router.navigate(['/teams']);
});
}*/

