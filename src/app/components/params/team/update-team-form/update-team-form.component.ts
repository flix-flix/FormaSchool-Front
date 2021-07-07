import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamNameDescPict } from 'src/app/models/team/teamNameDescPict';
import { TeamService } from 'src/app/services/team.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-team-form',
  templateUrl: './update-team-form.component.html',
  styleUrls: ['./update-team-form.component.css']
})
export class UpdateTeamFormComponent implements OnInit {
  env = environment;

  teamUpdate: TeamNameDescPict = { id: " ", name: " ", desc: " ", picture: " " };
  teamUpdateForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl(''),
    picture: new FormControl('')
  });

  teamId: string;
  team: TeamNameDescPict;

  constructor(
    private service: TeamService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    let teamId: string;
    this.activatedRoute.parent.paramMap.subscribe(params => {
      teamId = params.get("teamId");
      this.service.findNamePicDescById(teamId).subscribe(teamUpdate => {
        this.teamUpdate = teamUpdate;
        this.teamUpdateForm = this.fb.group({
          name: this.teamUpdate.name,
          desc: this.teamUpdate.desc,
          picture: this.teamUpdate.picture
        })
      })
    });
  }

  ngOnInit(): void {
    this.activatedRoute.parent.paramMap.subscribe(params => {
      this.teamId = params.get("teamId");
    })
    this.service.findNamePicDescById(this.teamId).subscribe(team => {
      this.team = team;
    })

  }
  updateTeam = (teamId) => {
    this.teamUpdate.name = this.teamUpdateForm.value.name;
    this.teamUpdate.desc = this.teamUpdateForm.value.desc;
    this.teamUpdate.picture = this.teamUpdateForm.value.picture;
    this.service.updateTeamNameDescPic(this.teamUpdate).subscribe(teamUpdate => {
      this.teamUpdate = teamUpdate;
      const URL = `/params/team/${teamId}/summary`;
      this.router.navigate([URL]);
    })
  }
}
  /*updateTeam = (teamUpdate: TeamNameDescPict) => {
this.teamUpdate.name = this.teamUpdateForm.value.name;
this.teamUpdate.desc = this.teamUpdateForm.value.desc;
this.teamUpdate.picture = this.teamUpdateForm.value.picture;
this.service.updateTeam.subscribe(teamUpdate => {
this.router.navigate(["/home"]);
})
}
}
/*teamForm: FormGroup;
teamId: string;
team: TeamNameDescPict;

constructor(private fb: FormBuilder, private teamService: TeamService, private router: Router, private route: ActivatedRoute) {
this.teamForm = this.fb.group({
name: "",
desc: "",
picture: "",
id: -1
});
}

ngOnInit(): void {
this.route.paramMap.subscribe(params => this.teamService.getTeamById(params.get("id")).subscribe(team =>
this.teamForm.setValue(team)));
this.route.parent.paramMap.subscribe(params => {
this.teamId = params.get("teamId");
})
this.teamService.findNamePicDescById(this.teamId).subscribe(team => {
this.team = team;
})

}

updateTeam = (teamId) => {
this.teamService.updateTeamNameDescPic(this.teamForm?.value).subscribe(resp => {
this.teamService.updateTeamNameDescPic(this.teamForm.value);
this.router.navigate([`params/team/${teamId}/summary`]);
});
}
}*/

