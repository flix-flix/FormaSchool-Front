import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalonNameTeam } from 'src/app/models/salon/salonNameTeam';
import { SalonService } from 'src/app/services/salon.service';

@Component({
  selector: 'app-team-chat',
  templateUrl: './team-chat.component.html',
  styleUrls: ['./team-chat.component.css']
})
export class TeamChatComponent implements OnInit {

  /** From URL */
  teamId: string;
  /** From URL */
  salonId: string;

  salons: SalonNameTeam[];

  constructor(private salonService: SalonService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.teamId = params.get("teamId");
      this.salonId = params.get("salonId");

      if (!this.salons)
        // Redirect to default salon
        this.salonService.findAllOfTeam(this.teamId).subscribe(salons => {
          if (this.salonId == "redirect")
            this.router.navigate([`/teamMessages/${this.teamId}/${salons[0].id}`]);
          else
            this.salons = salons
        });
    });
  }
}
