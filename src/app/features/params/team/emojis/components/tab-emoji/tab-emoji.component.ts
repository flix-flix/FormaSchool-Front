import { Component, Input, OnInit } from '@angular/core';
import { CreatedEmojiService } from 'src/app/features/createdEmoji/services/created-emoji.service';
import { CreatedEmoji } from 'src/app/models/createdEmoji';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tab-emoji',
  templateUrl: './tab-emoji.component.html',
  styleUrls: ['./tab-emoji.component.css']
})
export default class TabEmojiComponent implements OnInit {

  @Input() emojis: CreatedEmoji[];

  emoji: CreatedEmoji;

  emojiDialog: boolean;

  selectedEmojis: CreatedEmoji[];

  submitted: boolean;

  constructor(private service: CreatedEmojiService) {
  }

  ngOnInit(): void {
  }

  /**
   * This function refresh the list of emoji
   */
  refreshEmoji = () => {
    this.emojis = this.service.findAllCreatedEmoji();
  }

  /**
   * This function create a new CreatedEmoji empty and display the pop-up
   */
  openNew = () => {
    //TODO replace the id 1 by the id of current user connected
    this.emoji = new CreatedEmoji(null, null, null, UserService.generateUserNamePicture(1));
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
    if (!this.service.isNameAlreadyUse(this.emoji.name)) {
      if (this.emoji.id == null) {
        this.emoji.id = this.service.addEmoji(this.emoji);
        this.emojis.push(this.emoji);
      }
      this.emojiDialog = false;
      this.emoji = new CreatedEmoji(null, null, null, null);
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
    this.emoji = new CreatedEmoji(null, null, null, null);
    this.refreshEmoji();
  }
}
