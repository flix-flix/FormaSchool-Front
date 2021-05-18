import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.css']
})
export class TeamSelectComponent implements OnInit {
// c'est ici qu'il faut ajouter liste compléte des équipes
exemple = [1,2,3,4,5]
  constructor() { }

  ngOnInit(): void {
  }

}
