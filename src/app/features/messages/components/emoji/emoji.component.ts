import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent implements OnInit {

  @Output() eventEitter = new EventEmitter();

  @Input() emoji: { name: string, users: string[] };

  on: boolean;

  // TODO [Remove] use id
  user = "Félix";

  constructor() { }

  ngOnInit(): void {
    this.on = this.emoji.users.includes("Félix");
  }

  /** Handle click on reaction emoji, either add/remove the reaction for the user */
  addRemoveReact = () => {
    this.eventEitter.emit(this.emoji);
    // TODO [Remove] fake emoji counter
    if (this.on)
      this.emoji.users.splice(this.emoji.users.indexOf(this.user), 1);
    else
      this.emoji.users.push(this.user);

    this.on = !this.on
  }

  /** */
  getTextTooltip = () => {
    let namesList = [];

    let userIn = this.emoji.users.includes(this.user);

    // Display the user in first (if he used the reaction)
    if (userIn)
      if (this.emoji.users.length == 1)
        return "Tu as réagi avec";
      else
        namesList.push("Toi");

    for (let index = 0; index < Math.min(this.emoji.users.length, 4); index++)
      if (this.emoji.users[index] != this.user)// User already displayed
        namesList.push(this.emoji.users[index]);

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
}
