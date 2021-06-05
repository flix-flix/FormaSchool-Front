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
    this.trieDate();
  }

  /**
   * This function sort the list by the attribute date
   */
  trieDate = () => {
    this.logs.sort((obj1: Log, obj2: Log) => {
      if (obj1.date < obj2.date) {
        return 1;
      }
      if (obj1.date > obj2.date) {
        return -1;
      }
      return 0;
    });
  }
}
