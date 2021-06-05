import { Component, Input, OnInit } from '@angular/core';
import { EmojiService } from 'src/app/services/emoji.service';
import { Salon } from '../../../../models/salon';

@Component({
  selector: 'app-salon-button',
  templateUrl: './salon-button.component.html',
  styleUrls: ['./salon-button.component.css']
})
export class SalonButtonComponent implements OnInit {

  @Input() salon;// TODO Salon
  @Input() teamId: number;
  @Input() salonId: number;

  constructor() { }

  ngOnInit(): void {
    this.salon.html = EmojiService.processEmoji(this.salon.name, 4, this.teamId);
  }
}
