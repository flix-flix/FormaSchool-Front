import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { creationTeam } from 'src/app/models/creationTeam';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  teamForm: FormGroup;

  constructor(private fb: FormBuilder, private teamService: TeamService) {
    this.teamForm = this.fb.group({
      picture: [''],
      name: [''],
      desc: ['']
    })
  }

  ngOnInit(): void {

  }
  /**
   * This function allows us to save a team
   */
  save = () => {
    let team: creationTeam = this.teamForm.value;
    let idRetour: number = this.teamService.save(team);
    alert(`team creer avec comme id ${idRetour}`);
  }

}
