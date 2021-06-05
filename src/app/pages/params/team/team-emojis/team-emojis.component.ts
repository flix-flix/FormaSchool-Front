import { Component, OnInit } from '@angular/core';
import { CreatedEmoji } from 'src/app/models/createdEmoji';
import { EmojiService } from 'src/app/services/emoji.service';


@Component({
  selector: 'app-team-emojis',
  templateUrl: './team-emojis.component.html',
  styleUrls: ['./team-emojis.component.css']
})
export class TeamEmojisComponent implements OnInit {

  emojis: CreatedEmoji[];

  constructor(private service: EmojiService) {
  }

  ngOnInit(): void {
    this.emojis = this.service.findAllCreatedEmoji();
  }
}
