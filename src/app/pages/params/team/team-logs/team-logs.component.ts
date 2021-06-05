import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/features/params/team/logs/models/log';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-team-logs',
  templateUrl: './team-logs.component.html',
  styleUrls: ['./team-logs.component.css']
})
export class TeamLogsComponent implements OnInit {

  logs: Log[];

  constructor(private service: LogService) { }

  ngOnInit(): void {
    //TODO replace 1 by teamId in URL
    this.service.findByTeam(1).subscribe(logs => {
      this.logs = logs;
    })
  }
}
