import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserName } from 'src/app/models/userName';
import { EmojiService } from 'src/app/services/emoji.service';
import { Reaction } from '../../models/reaction';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent implements OnInit {

  @Output() eventEitter = new EventEmitter();

  @Input() emoji: Reaction;

  /** true: used by the user */
  on: boolean;

  // TODO [Improve] Get user from local storage
  user = new UserName(1, "Félix", "Burie");

  constructor() { }

  ngOnInit(): void {
    this.on = this.emoji.users.find(user => user.id == this.user.id) != undefined;
  }

  /** Handle click on reaction emoji, either add/remove the reaction for the user */
  addRemoveReact = () => {
    this.eventEitter.emit(this.emoji);
    // TODO [Back] fake emoji counter
    if (this.on)
      this.emoji.users = this.emoji.users.filter(user => user.id != this.user.id);
    else
      this.emoji.users.push(this.user);

    this.on = !this.on
  }

  /** Returns the tooltip text (hover on emoji): "A, B, C and 7 others use this emoji" */
  getTextTooltip = () => {
    let namesList = [];
    let userIn = this.emoji.users.find(user => user.id == this.user.id) != undefined;

    // Display the user in first (if he used the reaction)
    if (userIn)
      if (this.emoji.users.length == 1)
        return "Tu as réagi avec";
      else
        namesList.push("Toi");

    for (let index = 0; index < Math.min(this.emoji.users.length, 4); index++)
      if (this.emoji.users[index].id != this.user.id)// User already displayed
        namesList.push(this.emoji.users[index].firstname);

    // names: array -> string
    let namesStr = namesList[0];
    if (this.emoji.users.length == 2)
      namesStr += ` et ${namesList[1]}`;
    if (this.emoji.users.length == 3)
      namesStr += `, ${namesList[1]} et ${namesList[2]}`;
    else if (this.emoji.users.length > 3) {
      namesStr += `, ${namesList[1]}, ${namesList[2]} et ${this.emoji.users.length - 3} `;
      namesStr += this.emoji.users.length == 4 ? "autre personne" : "autre personnes";
    }

    return `${namesStr} ${userIn ? "avez" : this.emoji.users.length == 1 ? "a" : "ont"} réagi avec`;
  }

  getEmojiPath = () => {
    return EmojiService.getEmoji(this.emoji.name).picture;
  }
}
