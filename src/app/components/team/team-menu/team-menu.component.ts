import { Component, Input, OnInit } from '@angular/core';
import { SalonNameTeam } from 'src/app/models/salon/salonNameTeam';
import { TeamNamePict } from 'src/app/models/team/teamNamePict';
import { EmojiService } from 'src/app/services/emoji.service';
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

  constructor(private teamService: TeamService, private salonService: SalonService, private emojiService: EmojiService) { }

  ngOnInit(): void {
    this.teamService.findNamePictById(this.teamId).subscribe(team => this.team = team);
    this.salonService.findAllOfTeam(this.teamId).subscribe(salons => this.salons = salons);
  }
}