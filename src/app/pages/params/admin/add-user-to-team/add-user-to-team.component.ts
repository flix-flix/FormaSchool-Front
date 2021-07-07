import { Component, OnInit } from '@angular/core';
import { TeamNamePict } from 'src/app/models/team/teamNamePict';
import { UserNamePict } from 'src/app/models/user/userNamePict';
import { MemberService } from 'src/app/services/member.service';
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

  constructor(private userService: UserService, private teamService: TeamService, private memberService: MemberService) { }

  ngOnInit(): void {
    this.teamService.findAllPresentation().subscribe(teamList => {
      this.teams = teamList;
    });
  }

  /**
   * This function is used when a team is selected, it refresh the list of users to show
   */
  refreshUser = () => {
    if (this.selectedTeam != null) {
      this.userService.userNotInTheTeam(this.selectedTeam.id).subscribe(users => {
        this.users = users;
        this.users.forEach(user => user._search = user.firstname + " " + user.lastname);
      });
    }
  }

  /**
   * This function allows us to save the link between a team and a user/users 
   */
  save = () => {
    this.selectedUser.forEach(user => {
      this.memberService.save({ team: this.selectedTeam, user: user }).subscribe(membre => {
        alert(`Membre bien creer avec l'id: ${membre.id}`);
        this.refreshUser();
      })
    });
  }
}
