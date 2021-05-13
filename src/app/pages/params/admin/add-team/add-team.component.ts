import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Salon } from 'src/app/models/salon';
import { Team } from 'src/app/models/team';
import { SalonService } from 'src/app/services/salon.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  teamForm: FormGroup;

  constructor(private fb:FormBuilder, private teamService:TeamService, private salonService:SalonService) {
    this.teamForm = this.fb.group({
      picture:[''],
      name:[''],
      desc:['']
    })
   }

  ngOnInit(): void {
    
  }
  /*
    This function allows us to save a team with one default salon : Salon call General
  */
  save = () => {
    let team:Team = this.teamForm.value;
    team.isPrivate=false;

    let salon:Salon = new Salon(undefined, "General", "Description par default à la creation");
    this.salonService.save(salon).subscribe(salon =>{
      team.salons = [salon];
      this.teamService.save(team).subscribe(team =>{
        alert(`team creer avec comme id ${team.id} ${team.salons[0].id}`);
      })
    })
  }

}
