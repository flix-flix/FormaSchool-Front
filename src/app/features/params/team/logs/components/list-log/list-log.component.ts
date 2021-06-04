import { Component, Input, OnInit } from '@angular/core';
import { Log } from '../../models/log';

@Component({
  selector: 'app-list-log',
  templateUrl: './list-log.component.html',
  styleUrls: ['./list-log.component.css']
})
export class ListLogComponent implements OnInit {

  @Input() logs: Log[];

  constructor() { }

  ngOnInit(): void {
  }

}
