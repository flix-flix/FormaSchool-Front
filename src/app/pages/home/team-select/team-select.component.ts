import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.css']
})
export class TeamSelectComponent implements OnInit {

  teams = []

  constructor(private service: TeamService, private userService: UserService) { }

  ngOnInit(): void {
    // TODO User from local storage
    this.userService.findNamePictDefault().subscribe(user =>
      this.service.findAllTeamOfUser(user.id).subscribe(listTeam => this.teams = listTeam)
    );
  }
}
