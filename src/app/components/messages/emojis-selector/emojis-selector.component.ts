import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emojis-selector',
  templateUrl: './emojis-selector.component.html',
  styleUrls: ['./emojis-selector.component.css']
})
export class EmojisSelectorComponent implements OnInit {

  emojis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
  search: string;

  constructor() { }

  ngOnInit(): void {
  }


}
