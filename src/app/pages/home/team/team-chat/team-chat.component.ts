import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalonName } from 'src/app/models/salonName';
import { SalonService } from 'src/app/services/salon.service';

@Component({
  selector: 'app-team-chat',
  templateUrl: './team-chat.component.html',
  styleUrls: ['./team-chat.component.css']
})
export class TeamChatComponent implements OnInit {

  /** From URL */
  teamId: number;
  /** From URL */
  salonId: number;

  salons: SalonName[];

  constructor(private salonService: SalonService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.teamId = +params.get("teamId");
      this.salonId = +params.get("salonId");

      // Redirect to default salon
      if (this.salonId == 0)
        this.salonService.getDefaultSalonOfTeam(this.teamId).subscribe(id => {
          this.router.navigate([`/teamMessages/${this.teamId}/${id}`]);
        });
      else
        this.salonService.findAllSalonsNameOfTeam(this.teamId).subscribe(salons => this.salons = salons);
    });
  }
}
