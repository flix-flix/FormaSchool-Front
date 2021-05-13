import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-team-menu',
  templateUrl: './team-menu.component.html',
  styleUrls: ['./team-menu.component.css']
})
export class TeamMenuComponent implements OnInit {

  @Output() switchSalon = new EventEmitter<number>();

  @Input() salons: { id: number, name: string, isSelect: boolean }[];

  select = 0;

  constructor() { }

  ngOnInit(): void {
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