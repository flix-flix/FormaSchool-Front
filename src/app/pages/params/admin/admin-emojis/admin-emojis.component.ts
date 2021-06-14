import { Component, OnInit } from '@angular/core';
import { CreatedEmoji } from 'src/app/models/emoji/createdEmoji';
import { EmojiService } from 'src/app/services/emoji.service';

@Component({
  selector: 'app-admin-emojis',
  templateUrl: './admin-emojis.component.html',
  styleUrls: ['./admin-emojis.component.css']
})
export class AdminEmojisComponent implements OnInit {

  emojis: CreatedEmoji[];

  constructor(private service: EmojiService) { }

  ngOnInit(): void {
    this.service.findCreatedEmojiOrga().subscribe(emojis => {
      this.emojis = emojis;
    });
  }

}
