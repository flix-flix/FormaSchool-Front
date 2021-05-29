import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent implements OnInit {

  @Output() eventEitter = new EventEmitter();

  @Input() emoji: { name: string, users: string[], on: boolean };

  constructor() { }

  ngOnInit(): void {
  }

  addRemoveReact = () => {
    this.eventEitter.emit(this.emoji);
    // TODO [Remove] fake emoji counter
    if (this.emoji.on)
      this.emoji.users.pop();
    else
      this.emoji.users.push("");

    this.emoji.on = !this.emoji.on
  }
}
