import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Log } from 'src/app/models/log';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-team-logs',
  templateUrl: './team-logs.component.html',
  styleUrls: ['./team-logs.component.css']
})
export class TeamLogsComponent implements OnInit {

  logs: Log[];
  teamId: String;

  constructor(private service: LogService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.parent.paramMap.subscribe(params => {
      this.teamId = params.get("teamId");
    })
    this.service.findByTeam(this.teamId).subscribe(logs => {
      this.logs = logs;
    })
  }
}
