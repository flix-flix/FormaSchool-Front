import { Component, Input, OnInit } from '@angular/core';
import { Log } from 'src/app/models/log';

@Component({
  selector: 'app-list-log',
  templateUrl: './list-log.component.html',
  styleUrls: ['./list-log.component.css']
})
export class ListLogComponent implements OnInit {

  @Input() logs: Log[];
  @Input() teamId: string;

  constructor() { }

  ngOnInit(): void {
    if (this.logs != null) {
      this.trieDate();
    }
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
