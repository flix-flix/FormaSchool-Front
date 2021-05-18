import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {


  users = [
    { nom: "Vennin", prenom: "Jason", age: 12, team: "Ibm", roles: [0, 2] },
    { nom: "Novelli ", prenom: "Luca", age: 12, team: "Ibm", roles: [3] },
    { nom: "Burie", prenom: "Felix", age: 12, team: "Ibm", roles: [0, 1, 2] },
    { nom: "Fahad", prenom: "Bouchaib", age: 12, team: "Ibm", roles: [2] },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
