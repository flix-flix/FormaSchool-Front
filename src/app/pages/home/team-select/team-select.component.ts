import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocalStorage } from 'src/app/models/user/userLocalStorage';
import { StorageService } from 'src/app/services/storage.service';
import { TeamService } from 'src/app/services/team.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.css']
})
export class TeamSelectComponent implements OnInit {
  env = environment;

  user: UserLocalStorage;
  teams = []

  constructor(private service: TeamService, private router: Router, private storageService: StorageService) { }

  ngOnInit(): void {
    this.storageService.subscribe("user", user => this.user = user);

    // TODO [Guard]
    if (this.user == null) {
      this.router.navigate(["/login"]);
      return;
    }
    // TODO Store teams in user
    this.service.findAllTeamOfUser(this.user.id).subscribe(listTeam => this.teams = listTeam)
  }
}
