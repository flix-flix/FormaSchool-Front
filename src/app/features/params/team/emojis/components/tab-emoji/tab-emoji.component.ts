import { Component, Input, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { CreatedEmoji } from 'src/app/models/createdEmoji';
import { EmojiService } from 'src/app/services/emoji.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tab-emoji',
  templateUrl: './tab-emoji.component.html',
  styleUrls: ['./tab-emoji.component.css']
})
export default class TabEmojiComponent implements OnInit {

  @Input() emojis: CreatedEmoji[];

  @Input() teamId: number;

  emoji: CreatedEmoji;

  emojiDialog: boolean;

  selectedEmojis: CreatedEmoji[];

  submitted: boolean;

  constructor(private service: EmojiService) {
  }

  ngOnInit(): void {
  }

  /**
   * This function refresh the list of emoji
   */
  refreshEmoji = () => {
    this.service.findCreatedEmojiByTeamId(this.teamId).subscribe(emojis => {
      this.emojis = emojis;
    });
  }

  /**
   * This function create a new CreatedEmoji empty and display the pop-up
   */
  openNew = () => {
    //TODO replace the id 1 by the id of current user connected 
    this.emoji = new CreatedEmoji(null, this.teamId, null, null, UserService.generateUserNamePicture(1));
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
    let isUsed: boolean;
    this.service.isNameAlreadyUse(this.emoji.id, this.emoji.name).subscribe(used => {
      isUsed = used;
    })
    if (!isUsed) {
      if (this.emoji.id == null) {
        this.service.addEmoji(this.emoji).subscribe(idRetour => {
          this.emoji.id = idRetour;
        });
        this.emojis.push(this.emoji);
      }
      else {
        this.service.updateCreatedEmoji(this.emoji);
      }
      this.emojiDialog = false;
      this.emoji = new CreatedEmoji(null, this.teamId, null, null, null);
    }
    else {
      alert("Alias deja utiliser");
    }
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
  deleteEmoji = (emojiId: number) => {
    this.service.deleteById(emojiId);
    this.emoji = new CreatedEmoji(null, this.teamId, null, null, null);
    this.refreshEmoji();
  }
}
