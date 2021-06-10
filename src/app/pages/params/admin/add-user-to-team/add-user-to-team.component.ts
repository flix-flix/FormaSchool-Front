import { Component, OnInit } from '@angular/core';
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
    this.teamService.findAllPresentation().subscribe(teamList => {
      this.teams = teamList;
    })
  }

  /**
   * This function is used when a team is selected, it refresh the list of users to show
   */
  refreshUser = () => {
    if (this.selectedTeam != null) {
      this.userService.listUserLinkTeam(+this.selectedTeam.id).subscribe(users => {
        this.users = users;
      })
    }
  }

  /**
   * This function allows us to save the link between a team and a user/users 
   */
  save = () => {
    let retour1;
    let retour2;
    this.selectedUser.forEach(user => {
      this.teamService.saveLink(+this.selectedTeam.id, +user.id).subscribe(idRetour => {
        retour1 = idRetour;
      });
      this.userService.saveLink(+this.selectedTeam.id, +user.id).subscribe(idRetour => {
        retour2 = idRetour
      });
      alert(`retour 1: ${retour1} retour 2: ${retour2}`);
    });
    this.refreshUser();
  }

}
