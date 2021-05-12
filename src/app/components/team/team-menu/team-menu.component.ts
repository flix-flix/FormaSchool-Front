import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-menu',
  templateUrl: './team-menu.component.html',
  styleUrls: ['./team-menu.component.css']
})
export class TeamMenuComponent implements OnInit {

  salons = [
    { id: 0, name: "Général" },
    { id: 1, name: "Nourriture" },
    { id: 2, name: "Sérieux" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
