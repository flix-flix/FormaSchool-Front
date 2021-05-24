import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TeamLinkUser } from 'src/app/models/teamLinkUser';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-menu',
  templateUrl: './team-menu.component.html',
  styleUrls: ['./team-menu.component.css']
})
export class TeamMenuComponent implements OnInit {

  @Output() switchSalon = new EventEmitter<number>();

  @Input() salons: { id: number, name: string, isSelect: boolean }[];
  @Input() teamId: number;

  team: TeamLinkUser;
  // TODO [Remove]
  select = 0;

  constructor() { }

  ngOnInit(): void {
    TeamService.findNamePictureById(this.teamId).subscribe(json => this.team = json);
  }

  switchToSalon = (event) => {
    this.salons[this.select].isSelect = false;
    this.salons[this.select = event].isSelect = true;

    this.switchSalon.emit(event);
  }

  openTeamParams = () => {
    alert("TODO team parameters");
  }
}