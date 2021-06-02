import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { EmojiService } from 'src/app/services/emoji.service';

@Component({
  selector: 'app-salon-button',
  templateUrl: './salon-button.component.html',
  styleUrls: ['./salon-button.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SalonButtonComponent implements OnInit {

  @Input() salon;
  @Input() salonId: number;

  constructor() { }

  ngOnInit(): void {
    this.salon.html = EmojiService.processEmoji(this.salon.name, 4);
  }

  openSalonParams = (event) => {
    alert(`TODO open salon params (id: ${this.salon.id})`);
    event.stopPropagation();
  }
}
