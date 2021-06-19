import { Component, Input, OnInit } from '@angular/core';
import { SalonNameTeam } from 'src/app/models/salon/salonNameTeam';
import { TeamNamePict } from 'src/app/models/team/teamNamePict';
import { SalonService } from 'src/app/services/salon.service';
import { TeamService } from 'src/app/services/team.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-team-menu',
  templateUrl: './team-menu.component.html',
  styleUrls: ['./team-menu.component.css']
})
export class TeamMenuComponent implements OnInit {
  env = environment;

  @Input() teamId: string;
  @Input() salonId: string;

  team: TeamNamePict;
  salons: SalonNameTeam[];

  constructor(private teamService: TeamService, private salonService: SalonService) { }

  ngOnInit(): void {
    this.teamService.findNamePictureById(this.teamId).subscribe(json => this.team = json);
    this.salonService.findAllSalonsNameOfTeam(this.teamId).subscribe(json => this.salons = json.map(salon => SalonNameTeam.fromJSON(salon)));
  }
}