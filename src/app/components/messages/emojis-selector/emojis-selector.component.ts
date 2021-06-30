import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmojiDesc } from 'src/app/models/emoji/emojiDesc';
import { EmojiService } from 'src/app/services/emoji.service';
import { environment } from 'src/environments/environment';
import { MsgWriterComponent } from '../msg-writer/msg-writer.component';

@Component({
  selector: 'app-emojis-selector',
  templateUrl: './emojis-selector.component.html',
  styleUrls: ['./emojis-selector.component.css']
})
export class EmojisSelectorComponent implements OnInit {
  url = environment.apiUrl + '/files/emojis/';

  @Output() emojiEmit = new EventEmitter<string>();

  _emojis: EmojiDesc[] = [];
  _search: string;
  emojisSearch: EmojiDesc[] = [];
  emojiHover: EmojiDesc;

  constructor(private emojiService: EmojiService) { }

  ngOnInit(): void {
    this.emojiService.register(this);
  }

  // ====================================================================================================

  emojiSelected(emoji: EmojiDesc) {
    this.emojiEmit.emit(emoji.annotation);
    this.emojiHover = this._emojis[0];
  }

  hover(emoji: EmojiDesc) {
    this.emojiHover = emoji;
  }

  // ====================================================================================================

  set emojis(emojis) {
    this.emojisSearch = this._emojis = emojis;
    this.emojiHover = this._emojis[0];
  }

  set search(search: string) {
    this._search = search;
    this.emojisSearch = this._emojis.filter(emoji => emoji.annotation.includes(search))
  }

  get search() {
    return this._search;
  }
}
