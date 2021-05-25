import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Salon } from 'src/app/features/team/services/models/salon';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-chat',
  templateUrl: './team-chat.component.html',
  styleUrls: ['./team-chat.component.css']
})
export class TeamChatComponent implements OnInit {

  teamId: number;
  salonId: number;

  salons: Salon[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.teamId = +params.get("teamId");
      this.salonId = +params.get("salonId");

      // TODO [Fix] Called on each salon switch
      TeamService.findAllSalonsOfTeam(this.teamId).subscribe(salons => this.salons = salons);
    });
  }

  switchToSalon = (event) => {
    console.log("chat", event);
  }
}
