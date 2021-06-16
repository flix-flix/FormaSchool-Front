import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';

import { TeamService } from 'src/app/services/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SalonService } from 'src/app/services/salon.service';
import { RoleWithoutRights } from 'src/app/models/role/roleWithoutRights';
import { Member } from 'src/app/models/member/member';


@Component({
  selector: 'app-salon-permissions',
  templateUrl: './salon-permissions.component.html',
  styleUrls: ['./salon-permissions.component.css']
})
export class SalonPermissionsComponent implements OnInit {

  teamId: number;

  constructor(private salonService: SalonService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.parent.paramMap.subscribe(params => {
      let salonId = +params.get("salonId");
      this.salonService.findTeamIdById(salonId).subscribe(teamId => {
        this.teamId = teamId;
      });
    });
  }

}
