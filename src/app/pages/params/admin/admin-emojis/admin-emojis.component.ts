import { Component, OnInit } from '@angular/core';
import { EmojiCreate } from 'src/app/models/emoji/emojiCreate';
import { EmojiService } from 'src/app/services/emoji.service';

@Component({
  selector: 'app-admin-emojis',
  templateUrl: './admin-emojis.component.html',
  styleUrls: ['./admin-emojis.component.css']
})
export class AdminEmojisComponent implements OnInit {

  emojis: EmojiCreate[];

  constructor(private service: EmojiService) { }

  ngOnInit(): void {
    this.service.findCreatedEmojiOrga().subscribe(emojis => {
      this.emojis = emojis;
    });
  }

}
