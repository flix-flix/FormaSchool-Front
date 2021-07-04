import { Component, Input, OnInit } from '@angular/core';
import { MemberUserPseudo } from 'src/app/models/member/memberPseudoUser';
import { MessageWsService } from 'src/app/services/message-ws.service';
import { environment } from 'src/environments/environment';
import { Reaction } from '../../../models/reactions/reaction';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css']
})
export class EmojiComponent implements OnInit {
  env = environment;

  @Input() reaction: Reaction;
  @Input() msgId: string;
  _member: MemberUserPseudo;

  /** true: used by the user */
  on: boolean;

  constructor(private wsService: MessageWsService) { }

  ngOnInit(): void { }

  // =========================================================================================

  /** Handle click on reaction emoji, either add/remove the reaction for the user */
  addRemoveReact = () => {
    // TODO ?? don't wait for the server
    // this.on = !this.on
    this.wsService.react({ msgId: this.msgId, memberId: this._member.id, emojiId: this.reaction.emoji.id, on: !this.on });
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

  // =========================================================================================

  @Input() set member(member: MemberUserPseudo) {
    this._member = member;
    this.on = this.reaction.members.find(member => member.user.id == this.member.user.id) != undefined;
  }

  get member(): MemberUserPseudo {
    return this._member;
  }
}
