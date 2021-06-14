import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/log';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-admin-logs',
  templateUrl: './admin-logs.component.html',
  styleUrls: ['./admin-logs.component.css']
})
export class AdminLogsComponent implements OnInit {

  logs: Log[];

  constructor(private service: LogService) { }

  ngOnInit(): void {
    this.service.findAdminLogs().subscribe(logs => {
      this.logs = logs;
    })
  }
}
