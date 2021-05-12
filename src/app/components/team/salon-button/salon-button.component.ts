import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon-button',
  templateUrl: './salon-button.component.html',
  styleUrls: ['./salon-button.component.css']
})
export class SalonButtonComponent implements OnInit {

  @Input() salon;

  constructor() { }

  ngOnInit(): void {
  }

  selectSalon = () => {
    alert("salon " + this.salon.id);
  }

  openSalonParams = (event) => {
    alert(`TODO open salon params (id: ${this.salon.id})`);
    event.stopPropagation();
  }
}
