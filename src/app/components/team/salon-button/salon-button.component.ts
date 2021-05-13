import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-salon-button',
  templateUrl: './salon-button.component.html',
  styleUrls: ['./salon-button.component.css']
})
export class SalonButtonComponent implements OnInit {

  @Input() salon;
  @Output() switchSalon = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  selectSalon = () => {
    if (this.salon.select)
      return;
    this.switchSalon.emit(this.salon.id);
  }

  openSalonParams = (event) => {
    alert(`TODO open salon params (id: ${this.salon.id})`);
    event.stopPropagation();
  }
}
