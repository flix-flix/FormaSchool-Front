import { Component, Input, OnInit } from '@angular/core';
import { Log } from '../../models/log';

@Component({
  selector: 'app-list-log',
  templateUrl: './list-log.component.html',
  styleUrls: ['./list-log.component.css']
})
export class ListLogComponent implements OnInit {

  @Input() logs: Log[];
  @Input() teamId: number;

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
  ddmmyyyy = (date: Date): string => {
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();

    return [(dd > 9 ? '' : '0') + dd,
    (mm > 9 ? '' : '0') + mm,
    date.getFullYear()
    ].join('/');
  };
}
