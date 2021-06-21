import { Component, Input, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { CreatedEmoji } from 'src/app/models/emoji/createdEmoji';
import { EmojiService } from 'src/app/services/emoji.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab-emoji',
  templateUrl: './tab-emoji.component.html',
  styleUrls: ['./tab-emoji.component.css']
})
export default class TabEmojiComponent implements OnInit {
  env = environment;

  @Input() emojis: CreatedEmoji[];

  @Input() teamId: string;

  emoji: CreatedEmoji;

  emojiDialog: boolean;

  selectedEmojis: CreatedEmoji[];

  submitted: boolean;

  constructor(private service: EmojiService, private userService: UserService) {
  }

  ngOnInit(): void {
    if (!this.teamId) {
      this.teamId = null;
    }
  }

  /**
   * This function refresh the list of emoji
   */
  refreshEmoji = () => {
    if (this.teamId) {
      this.service.findCreatedEmojiByTeamId(this.teamId).subscribe(emojis => {
        this.emojis = emojis;
        console.log(this.emojis);
      });
    }
    else {
      this.service.findCreatedEmojiOrga().subscribe(emojis => {
        this.emojis = emojis;
      })
    }
  }

  /**
   * This function create a new CreatedEmoji empty and display the pop-up
   */
  openNew = () => {
    //TODO replace the id 1 by the id of current user connected 
    this.userService.findNamePictDefault().subscribe(user => {
      this.emoji = new CreatedEmoji(null, this.teamId, null, null, user);
    })
    this.submitted = false;
    this.emojiDialog = true;
  }

  /**
   * This function hide the pop-up
   */
  hideDialog = () => {
    this.emojiDialog = false;
    this.submitted = false;
    this.refreshEmoji();
  }

  /**
   * This function allow you to:
   *     - Save the emoji if his id were empty
   *     - Update the emoji if his id were not empty
   */
  saveEmoji = () => {
    this.submitted = true;

    this.service.isNameAlreadyUse(this.emoji.id, this.emoji.name).subscribe(used => {
      if (!used) {
        if (this.emoji.id == null) {
          this.service.addEmoji(this.emoji).subscribe();
          // this.service.addEmoji(this.emoji).subscribe(emoji => {
          //   this.emoji.id = emoji.id;
          // });
          this.emojis.push(this.emoji);
        }
        else {
          this.service.updateCreatedEmoji(this.emoji).subscribe();
        }
        this.emojiDialog = false;
        this.emoji = new CreatedEmoji(null, this.teamId, null, null, null);
      }
      else {
        alert("Alias deja utiliser");
      }
    })
  }

  /**
   * This function open the pop-up with information of the emoji selected
   * @param emoji A CreatedEmoji that you want to update
   */
  editEmoji = (emoji: CreatedEmoji) => {
    this.emoji = emoji;
    this.emojiDialog = true;
  }

  /**
   * This function allow you to delete all emoji which were selected
   */
  deleteSelectedEmojis() {
    this.selectedEmojis.map(emoji => this.service.deleteById(emoji.id));
    this.selectedEmojis = null;
    this.refreshEmoji();
  }

  /**
   * This function allow you to delete one emoji by passing his id
   * @param emojiId the id of the emoji you want to delete
   */
  deleteEmoji = (emojiId: string) => {
    this.service.deleteById(emojiId).subscribe(() => {
      this.emoji = new CreatedEmoji(null, this.teamId, null, null, null);
      this.refreshEmoji();
    });
  }
}
