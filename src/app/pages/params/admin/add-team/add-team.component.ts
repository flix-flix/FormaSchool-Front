import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeamNameDescPict } from 'src/app/models/team/teamNameDescPict';


import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  teamForm: FormGroup;
  picture: string = null;

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
    if (this.teamForm.get("name").value != "") {
      let team: TeamNameDescPict = this.teamForm.value;
      this.teamService.save(team).subscribe(team => {
        alert(`team creer avec comme id ${team.id}`);
      })
    }
    else {
      alert("Le nom de l'équipe doit être rempli")
    }
  }
}
