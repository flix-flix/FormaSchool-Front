import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/features/params/team/roles/services/role.service';
import { Member } from 'src/app/models/member';
import { TeamService } from 'src/app/services/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SalonService } from 'src/app/services/salon.service';
import { RoleWithoutRights } from 'src/app/features/params/team/roles/models/roleWithoutRights';

@Component({
  selector: 'app-salon-permissions',
  templateUrl: './salon-permissions.component.html',
  styleUrls: ['./salon-permissions.component.css']
})
export class SalonPermissionsComponent implements OnInit {
  members: Member[];
  teamId: number;
  booleanChoosen: boolean;
  roles: RoleWithoutRights[];

  constructor(private teamService: TeamService, private roleService: RoleService,
    private salonService: SalonService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.booleanChoosen = true;
    this.router.parent.paramMap.subscribe(params => {
      let salonId = +params.get("salonId");
      this.salonService.findTeamIdById(salonId).subscribe(teamId => {
        this.teamId = teamId;
      })
    })
    this.teamService.findRolesByTeamId(this.teamId).subscribe(roles => {
      let result = [];
      roles.forEach(roleId => {
        result.push(RoleService.generateRoleWithoutRights(roleId));
      });
      this.roles = result;
    })
    this.teamService.findMembersByTeamId(this.teamId).subscribe(members => {
      this.members = members;
    });
  }

  refreshBoolean = (member: Member) => {
    this.booleanChoosen = !this.booleanChoosen;
  }

  swap = () => {
    this.booleanChoosen = !this.booleanChoosen;
  }




}
