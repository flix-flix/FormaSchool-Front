import { Component, Input, OnInit } from '@angular/core';
import { SalonName } from 'src/app/models/salonName';
import { TeamNamePict } from 'src/app/models/teamNamePict';
import { SalonService } from 'src/app/services/salon.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-menu',
  templateUrl: './team-menu.component.html',
  styleUrls: ['./team-menu.component.css']
})
export class TeamMenuComponent implements OnInit {

  @Input() teamId: string;
  @Input() salonId: string;

  team: TeamNamePict;
  salons: SalonName[];

  constructor(private teamService: TeamService, private salonService: SalonService) { }

  ngOnInit(): void {
    this.teamService.findNamePictureById(this.teamId).subscribe(json => this.team = json);
    this.salonService.findAllSalonsNameOfTeam(this.teamId).subscribe(json => this.salons = json.map(salon => SalonName.fromJSON(salon)));
  }
}