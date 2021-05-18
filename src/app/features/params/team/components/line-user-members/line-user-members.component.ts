import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-user-members',
  templateUrl: './line-user-members.component.html',
  styleUrls: ['./line-user-members.component.css']
})
export class LineUserMembersComponent implements OnInit {

  @Input() user;

  roles = [
    { nom: "Stagiaire" },
    { nom: "Formateur" },
    { nom: "Delegué" },
    { nom: "Connard" }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
