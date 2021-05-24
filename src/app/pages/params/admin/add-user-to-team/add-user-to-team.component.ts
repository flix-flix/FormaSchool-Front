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

  users: UserLinkTeam[];
  teams: TeamLinkUser[];
  selectedUser:UserLinkTeam[] = []
  selectedTeam:TeamLinkUser;

  

  constructor(private userService:UserService, private teamService:TeamService) {
   }

  ngOnInit(): void {
    this.teams = this.teamService.findAllPresentation();
  }

  refreshUser = () => {
    if(this.selectedTeam!=null){
      this.users = this.userService.listUserLinkTeam(this.selectedTeam.id)
    }
  }
  save = () => {
    this.selectedUser.forEach(user => {
        let retour1 = this.userService.saveLink(this.selectedTeam.id, user.id);
        let retour2 = this.teamService.saveLink(this.selectedTeam.id,user.id);
        alert(`retour 1: ${retour1} retour 2: ${retour2}`);
    });
  }

}
