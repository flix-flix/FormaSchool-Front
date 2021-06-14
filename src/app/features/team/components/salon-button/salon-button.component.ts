import { Component, Input, OnInit } from '@angular/core';
import { SalonNameTeam } from 'src/app/models/salon/salonNameTeam';

@Component({
  selector: 'app-salon-button',
  templateUrl: './salon-button.component.html',
  styleUrls: ['./salon-button.component.css']
})
export class SalonButtonComponent implements OnInit {

  @Input() salon: SalonNameTeam;
  // TODO [Improve] ? on/off state (linked to other buttons and the display)
  /** Displayed salon */
  @Input() salonId: number;

  constructor() { }

  ngOnInit(): void { }
}
