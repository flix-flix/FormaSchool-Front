import { Component, Input, OnInit } from '@angular/core';
import { TeamLinkUser } from 'src/app/models/teamLinkUser';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-menu',
  templateUrl: './team-menu.component.html',
  styleUrls: ['./team-menu.component.css']
})
export class TeamMenuComponent implements OnInit {

  @Input() salons: { id: number, name: string }[];
  @Input() teamId: number;
  @Input() salonId: number;

  team: TeamLinkUser;

  constructor() { }

  ngOnInit(): void {
    TeamService.findNamePictureById(this.teamId).subscribe(json => this.team = json);
  }

  openTeamParams = () => {
    alert("TODO team parameters");
  }
}