import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamNameDescPict } from 'src/app/models/team/teamNameDescPict';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-update-team-form',
  templateUrl: './update-team-form.component.html',
  styleUrls: ['./update-team-form.component.css']
})
export class UpdateTeamFormComponent implements OnInit {

  teamUpdateForm: FormGroup = new FormGroup({
    nom: new FormControl(''),
    desc: new FormControl(''),
    picture: new FormControl('')
  });

  teamUpdate: TeamNameDescPict = new TeamNameDescPict(" ", " ", " ");

  constructor(
    private service: TeamService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    let id: number;
    this.route.paramMap.subscribe(params => {
      id = Number(params.get("id"));
      this.service.findNamePicDescById(id).subscribe(teamUpdate => {
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

  }

  /*updateTeam = (teamUpdate: TeamNameDescPict) => {
    this.teamUpdate.name = this.teamUpdateForm.value.name;
    this.teamUpdate.desc = this.teamUpdateForm.value.desc;
    this.teamUpdate.picture = this.teamUpdateForm.value.picture;
    this.service.updateTeam.subscribe(teamUpdate => {
      this.router.navigate(["/home"]);
    })
  }*/
}

