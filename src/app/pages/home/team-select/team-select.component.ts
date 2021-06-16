import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocalStorage } from 'src/app/models/user/userLocalStorage';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.css']
})
export class TeamSelectComponent implements OnInit {

  user: UserLocalStorage;
  teams = []

  constructor(private service: TeamService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));

    // TODO [Guard]
    if (this.user == null)
      this.router.navigate(["/login"]);

    // TODO Store teams in user
    this.service.findAllTeamOfUser(this.user.id).subscribe(listTeam => this.teams = listTeam)
  }
}
