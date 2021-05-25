import { Injectable } from '@angular/core';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  count = 10;
  defaultList = [
    { desc: "Créer/Editer salon(déplacer salon)", value: false },
    { desc: "Créer/Editer role", value: false },
    { desc: "Permettre de mentionner", value: false },
    { desc: "Editer les messages des autres", value: false }
  ];

  roles = [
    {
      id: 1,
      teamId: 1,
      name: "everyone",
      color: "#A2D0EA",
      rights: [
        { desc: "Créer/Editer salon(déplacer salon)", value: false },
        { desc: "Créer/Editer role", value: true },
        { desc: "Permettre de mentionner", value: false },
        { desc: "Editer les messages des autres", value: true }
      ]
    },
    {
      id: 2,
      teamId: 1,
      name: "SuperRole",
      color: "#B2D4EA",
      rights: [
        { desc: "Créer/Editer salon(déplacer salon)", value: true },
        { desc: "Créer/Editer role", value: true },
        { desc: "Permettre de mentionner", value: true },
        { desc: "Editer les messages des autres", value: true }
      ]
    }
  ]

  constructor() { }

  /**
   * Return all the rigths that can be change 
   * @returns return a list of rights which all are false by default
   */
  getListOfRights = () => {
    return this.defaultList;
  }

  /**
   * This function allows us to save a role
   * @param role a Role object (name, color, list of rights)
   * @param teamId the id of the team which contain the role
   * @returns a number which is the id of the role created
   */
  save = (teamId: number, role: Role): number => {
    let data = {
      id: this.count++,
      teamId: teamId,
      name: role.name,
      color: role.color,
      rights: role.rights
    }
    this.roles.push(data);
    return data.id;
  }
}
