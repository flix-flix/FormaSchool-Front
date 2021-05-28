import { Component, OnInit } from '@angular/core';
import { EmojiNamePict } from 'src/app/features/messages/models/emojiNamePict';
import { EmojiService } from 'src/app/services/emoji.service';

@Component({
  selector: 'app-team-emojis',
  templateUrl: './team-emojis.component.html',
  styleUrls: ['./team-emojis.component.css']
})
export class TeamEmojisComponent implements OnInit {
  productDialog: boolean;

  products: EmojiNamePict[];

  product: EmojiNamePict;

  selectedProducts: EmojiNamePict[];

  submitted: boolean;

  constructor() {
    this.products = [new EmojiNamePict(1, "blabla", "toto")];
  }

  ngOnInit(): void {
  }

  openNew = () => {
    this.product = new EmojiNamePict(null, null, null);
    this.submitted = false;
    this.productDialog = true;
  }

  hideDialog = () => {
    this.productDialog = false;
    this.submitted = false;
  }

}
