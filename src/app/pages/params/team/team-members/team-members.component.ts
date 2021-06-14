import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {

  teamId: string;
  members: Member[];

  constructor(private service: MemberService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.parent.paramMap.subscribe(params => {
      this.teamId = params.get("teamId");
    })

    this.service.findMembersByTeamId(this.teamId).subscribe(members => {
      this.members = members
    });
  }




}
