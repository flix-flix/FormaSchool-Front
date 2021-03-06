import { Component, Input, OnInit } from '@angular/core';
import { EmojiCreate } from 'src/app/models/emoji/emojiCreate';
import { UserLocalStorage } from 'src/app/models/user/userLocalStorage';
import { EmojiService } from 'src/app/services/emoji.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab-emoji',
  templateUrl: './tab-emoji.component.html',
  styleUrls: ['./tab-emoji.component.css']
})
export default class TabEmojiComponent implements OnInit {
  env = environment;

  @Input() emojis: EmojiCreate[];
  @Input() teamId: string;

  emoji: EmojiCreate;

  emojiDialog: boolean;
  selectedEmojis: EmojiCreate[];
  submitted: boolean;

  constructor(private service: EmojiService, private storageService: StorageService) { }

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
    let user: UserLocalStorage;
    this.storageService.subscribe("user", userStorage => {
      user = userStorage
      this.emoji = { teamId: this.teamId, user: { ...user } };
    });
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
          this.emojis.push(this.emoji);
        }
        else {
          this.service.updateCreatedEmoji(this.emoji).subscribe();
        }
        this.emojiDialog = false;
        this.emoji = { teamId: this.teamId };
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
  editEmoji = (emoji: EmojiCreate) => {
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
      this.emoji = { teamId: this.teamId };
      this.refreshEmoji();
    });
  }
}
