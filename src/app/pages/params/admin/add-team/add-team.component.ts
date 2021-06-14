import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
<<<<<<< HEAD
import { TeamNameDescPict } from 'src/app/models/teamNameDescPict';
=======
import { teamNameDescPict } from 'src/app/models/team/teamNameDescPict';
>>>>>>> develop
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
<<<<<<< HEAD
      let team: TeamNameDescPict = this.teamForm.value;
=======
      let team: teamNameDescPict = this.teamForm.value;
>>>>>>> develop
      this.teamService.save(team).subscribe(id => {
        let idRetour = id;
        alert(`team creer avec comme id ${idRetour}`);
      })
    }
    else {
      alert("Le nom de l'équipe doit être rempli")
    }
  }
}
