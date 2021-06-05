import { Component, Input, OnInit } from '@angular/core';
import { TeamNamePict } from 'src/app/models/teamNamePict';
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

  team: TeamNamePict;

  constructor() { }

  ngOnInit(): void {
    TeamService.findNamePictureById(this.teamId).subscribe(json => this.team = json);
  }
}