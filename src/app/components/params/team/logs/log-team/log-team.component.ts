import { Component, Input, OnInit } from '@angular/core';
import { Log } from '../../../../../models/log';

@Component({
  selector: 'app-log-team',
  templateUrl: './log-team.component.html',
  styleUrls: ['./log-team.component.css']
})
export class LogTeamComponent implements OnInit {

  @Input() log: Log;

  constructor() { }

  ngOnInit(): void {
  }

}
