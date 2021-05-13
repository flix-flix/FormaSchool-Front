import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-date',
  templateUrl: './line-date.component.html',
  styleUrls: ['./line-date.component.css']
})
export class LineDateComponent implements OnInit {

  @Input() date: Date;

  dateStr: string;

  constructor() { }

  ngOnInit(): void {
    this.dateStr = this.date.getDate() + " " + this.date.toLocaleString('default', { month: 'long' }) + " " + this.date.getFullYear();
  }
}
