import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Salon } from 'src/app/models/salon';
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.teamId = +params.get("teamId");
      this.salonId = +params.get("salonId");

      // TODO [Fix] Called on each salon switch
      TeamService.findAllSalonsOfTeam(this.teamId).subscribe(salons => {
        if (this.salonId == 0)
          this.router.navigate([`/teamMessages/${this.teamId}/${salons[0].id}`]);
        else
          this.salons = salons;
      });
    });
  }
}
