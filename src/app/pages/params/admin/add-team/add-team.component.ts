import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { teamNameDescPict } from 'src/app/models/teamNameDescPict';
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
      let team: teamNameDescPict = this.teamForm.value;
      let idRetour: number = this.teamService.save(team);
      alert(`team creer avec comme id ${idRetour}`);
    }
    else {
      alert("Le nom de l'équipe doit être rempli")
    }

  }

  test = () => {
    console.log("toto");
    console.log(this.picture);
  }

}
