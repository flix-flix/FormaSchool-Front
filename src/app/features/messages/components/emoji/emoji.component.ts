import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MemberUsersPseudo } from 'src/app/models/member/MemberUsersPseudo';
import { UserNamePict } from 'src/app/models/user/userNamePict';
import { EmojiService } from 'src/app/services/emoji.service';
import { Reaction } from '../../../../models/reaction';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent implements OnInit {

  @Output() eventEitter = new EventEmitter();

  @Input() reaction: Reaction;

  /** true: used by the user */
  on: boolean;

  // TODO [Improve] Get user from local storage
  member = new MemberUsersPseudo(new UserNamePict("123456", "Félix", "Burie", "123.png"), "pseudododod")

  constructor() { }

  ngOnInit(): void {
    this.on = this.reaction.members.find(member => member.user.id == this.member.user.id) != undefined;
  }

  /** Handle click on reaction emoji, either add/remove the reaction for the user */
  addRemoveReact = () => {
    this.eventEitter.emit(this.reaction);
    // TODO [Back] fake emoji counter
    if (this.on)
      this.reaction.members = this.reaction.members.filter(member => member.user.id != this.member.user.id);
    else
      this.reaction.members.push(this.member);

    this.on = !this.on
  }

  /** Returns the tooltip text (hover on emoji): "A, B, C and 7 others use this emoji" */
  getTextTooltip = () => {
    let namesList = [];
    let userIn = this.reaction.members.find(member => member.user.id == this.member.user.id) != undefined;

    // Display the user in first (if he used the reaction)
    if (userIn)
      if (this.reaction.members.length == 1)
        return "Tu as réagi avec";
      else
        namesList.push("Toi");

    for (let index = 0; index < Math.min(this.reaction.members.length, 4); index++)
      if (this.reaction.members[index].user.id != this.member.user.id)// User already displayed
        namesList.push(this.reaction.members[index].user.firstname);

    // names: array -> string
    let namesStr = namesList[0];
    if (this.reaction.members.length == 2)
      namesStr += ` et ${namesList[1]}`;
    if (this.reaction.members.length == 3)
      namesStr += `, ${namesList[1]} et ${namesList[2]}`;
    else if (this.reaction.members.length > 3) {
      namesStr += `, ${namesList[1]}, ${namesList[2]} et ${this.reaction.members.length - 3} `;
      namesStr += this.reaction.members.length == 4 ? "autre personne" : "autre personnes";
    }

    return `${namesStr} ${userIn ? "avez" : this.reaction.members.length == 1 ? "a" : "ont"} réagi avec`;
  }

  getEmojiPath = () => {
    return EmojiService.getEmoji(this.reaction.emoji.name).picture;
  }
}
