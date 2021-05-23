import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/features/logs/models/log';
import { LogService } from 'src/app/features/logs/services/log.service';

@Component({
  selector: 'app-team-logs',
  templateUrl: './team-logs.component.html',
  styleUrls: ['./team-logs.component.css']
})
export class TeamLogsComponent implements OnInit {

  logs: Log[];

  constructor(private service: LogService) { }

  ngOnInit(): void {
    this.logs = this.service.findAll();
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
