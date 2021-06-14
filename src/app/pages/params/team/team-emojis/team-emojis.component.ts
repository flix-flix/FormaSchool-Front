import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatedEmoji } from 'src/app/models/createdEmoji';
import { EmojiService } from 'src/app/services/emoji.service';


@Component({
  selector: 'app-team-emojis',
  templateUrl: './team-emojis.component.html',
  styleUrls: ['./team-emojis.component.css']
})
export class TeamEmojisComponent implements OnInit {

  emojis: CreatedEmoji[];
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
