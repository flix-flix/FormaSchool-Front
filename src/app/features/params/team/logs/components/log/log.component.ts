import { Component, Input, OnInit } from '@angular/core';
import { Log } from '../../models/log';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  @Input() log:Log;
  
  constructor() { }

  ngOnInit(): void {
  }

}
