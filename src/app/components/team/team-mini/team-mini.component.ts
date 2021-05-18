import { Component, OnInit } from '@angular/core';
// ajout 18 mai début
import * as team from '../../../images/_remove/teams/1.png';
// ajout 18 mai fin
@Component({
  selector: 'app-team-mini',
  templateUrl: './team-mini.component.html',
  styleUrls: ['./team-mini.component.css']
})
export class TeamMiniComponent implements OnInit {

  bonjour = 32;
  constructor() { }

  ngOnInit(): void {
  }

}


front\src\assets\images\_remove\teams



declare module '*.jpg' {
    const value: any;
    export default value;
 }