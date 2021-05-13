import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup } from '@angular/forms';
import { Team } from 'src/app/models/team';
import { User } from 'src/app/models/user';
import { AddUserToTeamService } from 'src/app/services/add-user-to-team.service';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user-to-team',
  templateUrl: './add-user-to-team.component.html',
  styleUrls: ['./add-user-to-team.component.css']
})
export class AddUserToTeamComponent implements OnInit {

  form : FormGroup;
  users: User[];
  teams: Team[];
  

  constructor(private fb : FormBuilder, private userService:UserService, private teamService:TeamService, private service:AddUserToTeamService) {
    this.form = this.fb.group({
      userForm:[User],
      teamForm:[Team],
    })
   }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data =>{
      this.users = data;
    });
    this.teamService.findAll().subscribe(data =>{
      this.teams = data;
    });
  }

  save = () => {
    this.form.get("userForm").value.forEach(user => {
      this.form.get("teamForm").value.forEach(team => {
        let data:{userId: number, teamId: number} = {userId:undefined, teamId:undefined};
        data.userId = user.id;
        data.teamId = team.id;
        this.service.save(data).subscribe();
      });
    });
    alert("Le ou les liens ont été fait :)");
  }

}
