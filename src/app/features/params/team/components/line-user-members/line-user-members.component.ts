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
  ]

  selectedRole;

  constructor() { }


  ajouteRole = () => {
    for (let indexRole = 0; indexRole = this.roles.length; indexRole++) {
      /*for (let indexUser = 0; indexUser = this.user.roles.length; indexUser++) {
        if (this.user.roles[indexUser] == this.roles[indexRole]) {
          continue here;
        }
      }
      this.possibleRoles.push(this.roles[indexRole])*/
      this.roles.filter(this.user.roles.include())
    }

  }

  ngOnInit(): void {
  }

}
