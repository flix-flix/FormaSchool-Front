import { Component, Input, OnInit } from '@angular/core';
import { Salon } from 'src/app/models/salon';
import { TeamNamePict } from 'src/app/models/teamNamePict';
import { SalonService } from 'src/app/services/salon.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-menu',
  templateUrl: './team-menu.component.html',
  styleUrls: ['./team-menu.component.css']
})
export class TeamMenuComponent implements OnInit {

  @Input() teamId: number;
  @Input() salonId: number;

  team: TeamNamePict;
  salons: Salon[];

  constructor(private teamService: TeamService, private salonService: SalonService) { }

  ngOnInit(): void {
    this.teamService.findNamePictureById(this.teamId).subscribe(json => this.team = json);
    this.salonService.findAllSalonsOfTeam(this.teamId).subscribe(json => this.salons = json);
  }
}