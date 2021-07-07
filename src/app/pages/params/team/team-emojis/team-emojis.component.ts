import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmojiCreate } from 'src/app/models/emoji/emojiCreate';
import { EmojiService } from 'src/app/services/emoji.service';


@Component({
  selector: 'app-team-emojis',
  templateUrl: './team-emojis.component.html',
  styleUrls: ['./team-emojis.component.css']
})
export class TeamEmojisComponent implements OnInit {

  emojis: EmojiCreate[];
  teamId: string;

  constructor(private service: EmojiService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.parent.paramMap.subscribe(params => {
      this.teamId = params.get("teamId");
    })
    this.service.findCreatedEmojiByTeamId(this.teamId).subscribe(emojis => {
      this.emojis = emojis;
    });
  }
}
