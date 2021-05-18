import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-role-members',
  templateUrl: './line-role-members.component.html',
  styleUrls: ['./line-role-members.component.css']
})
export class LineRoleMembersComponent implements OnInit {

  @Input() role;


  constructor() { }

  ngOnInit(): void {
  }

}
