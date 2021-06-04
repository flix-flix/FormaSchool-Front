import { Component, OnInit } from '@angular/core';
import { CreatedEmoji } from 'src/app/models/createdEmoji';
import { CreatedEmojiService } from 'src/app/features/createdEmoji/services/created-emoji.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-team-emojis',
  templateUrl: './team-emojis.component.html',
  styleUrls: ['./team-emojis.component.css']
})
export class TeamEmojisComponent implements OnInit {

  emojis: CreatedEmoji[];

  constructor(private service: CreatedEmojiService) {
  }

  ngOnInit(): void {
    this.emojis = this.service.findAllCreatedEmoji();
  }
}
