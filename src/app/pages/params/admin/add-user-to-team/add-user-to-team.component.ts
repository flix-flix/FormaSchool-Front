import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeamNamePict } from 'src/app/models/teamNamePict';
import { UserNamePict } from 'src/app/models/userNamePict';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user-to-team',
  templateUrl: './add-user-to-team.component.html',
  styleUrls: ['./add-user-to-team.component.css']
})
export class AddUserToTeamComponent implements OnInit {

  users: UserNamePict[];
  teams: TeamNamePict[];
  selectedUser: UserNamePict[] = []
  selectedTeam: TeamNamePict;



  constructor(private userService: UserService, private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.teams = this.teamService.findAllPresentation();
  }

  /**
   * This function is used when a team is selected, it refresh the list of users to show
   */
  refreshUser = () => {
    if (this.selectedTeam != null) {
      this.users = this.userService.listUserLinkTeam(this.selectedTeam.id)
    }
  }

  /**
   * This function allows us to save the link between a team and a user/users 
   */
  save = () => {
    this.selectedUser.forEach(user => {
      let retour1 = this.userService.saveLink(this.selectedTeam.id, user.id);
      let retour2 = this.teamService.saveLink(this.selectedTeam.id, user.id);
      alert(`retour 1: ${retour1} retour 2: ${retour2}`);
    });
  }

}
