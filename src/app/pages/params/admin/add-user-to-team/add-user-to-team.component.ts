import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeamLinkUser } from 'src/app/models/teamLinkUser';
import { UserLinkTeam } from 'src/app/models/userLinkTeam';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user-to-team',
  templateUrl: './add-user-to-team.component.html',
  styleUrls: ['./add-user-to-team.component.css']
})
export class AddUserToTeamComponent implements OnInit {

  form : FormGroup;
  users: UserLinkTeam[];
  teams: TeamLinkUser[];
  

  constructor(private fb : FormBuilder, private userService:UserService, private teamService:TeamService) {
    this.form = this.fb.group({
      userForm:[UserLinkTeam],
      teamForm:[TeamLinkUser],
    })
   }

  ngOnInit(): void {
    this.users = this.userService.findAllPresentation();
    this.teams = this.teamService.findAllPresentation();
    console.log(this.teams);
  }

  save = () => {
    this.form.get("userForm").value.forEach(user => {
      this.form.get("teamForm").value.forEach(team => {
        let retour1 = this.userService.saveLink(team.id, user.id);
        let retour2 = this.teamService.saveLink(team.id,user.id);
        alert(`retour 1: ${retour1} retour 2: ${retour2}`);
      });
    });
  }

}
