import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeamNameDescFile } from 'src/app/models/team/teamNameDescFile';



import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  teamForm: FormGroup;
  file: File;


  constructor(private fb: FormBuilder, private teamService: TeamService) {
    this.teamForm = this.fb.group({
      name: [''],
      desc: ['']
    })
  }

  ngOnInit(): void {
  }

  getEvent = (element) => {
    this.file = element.file;
  }

  /**
   * This function allows us to save a team
   */
  save = () => {
    if (this.teamForm.get("name").value != "") {
      let team: TeamNameDescFile = this.teamForm.value;
      if (this.file != null) {
        team.file = this.file;
        this.teamService.send(team);
      }
      else {
        this.teamService.save(team).subscribe();
      }
    }
    else {
      alert("Le nom de l'équipe doit être rempli")
    }
  }
}
