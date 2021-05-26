import { Injectable } from '@angular/core';
import { createRole } from '../models/createRole';
import { Role } from '../models/role';
import { RoleWithoutRights } from '../models/roleWithoutRights';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  nextId = 10;
  defaultList = [
    { desc: "Créer/Editer salon(déplacer salon)", value: false },
    { desc: "Créer/Editer role", value: false },
    { desc: "Permettre de mentionner", value: false },
    { desc: "Editer les messages des autres", value: false }
  ];

  roles: { [id: number]: { id: number, teamId: number, name: string, color: string, rights: { desc: string, value: boolean }[] } } =
    {
      1: {
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
      2: {
        id: 2,
        teamId: 1,
        name: "SuperRole",
        color: "#E1FF04",
        rights: [
          { desc: "Créer/Editer salon(déplacer salon)", value: true },
          { desc: "Créer/Editer role", value: true },
          { desc: "Permettre de mentionner", value: true },
          { desc: "Editer les messages des autres", value: true }
        ]
      }
    };

  constructor() { }

  /**
   * This function return a role Object from his id
   * @param roleId the id of the role you re looking for
   * @returns a Role object with the id you were looking for
   */
  generateRole = (roleId: number): Role => {
    if (!(roleId in this.roles)) {
      console.error("roleId doesn't exist:", roleId);
      return undefined;
    }
    return new Role(roleId, this.roles[roleId].name, this.roles[roleId].color, this.roles[roleId].rights);
  }

  /**
   * This function return a roleWithoutRights Object from his id
   * @param roleId the id of the role you re looking for
   * @returns a RoleWithoutRights object with the id you were looking for
   */
  generateRoleWithoutRights = (roleId: number): RoleWithoutRights => {
    if (!(roleId in this.roles)) {
      console.error("roleId doesn't exist:", roleId);
      return undefined;
    }
    return new RoleWithoutRights(roleId, this.roles[roleId].name, this.roles[roleId].color);
  }

  /**
   * This function get all role in base without rights
   * @returns list of RoleWithoutRights
   */
  findAllWithoutRights = (): RoleWithoutRights[] => {
    let res: RoleWithoutRights[] = [];
    Object.values(this.roles).map(element => {
      res.push(this.generateRoleWithoutRights(element.id));
    })
    return res;
  }

  /**
   * This function return a Role object with the id you re looking for
   * @param roleId the id of the role you re looking for
   * @returns a Role object
   */
  findRoleById = (roleId: number): Role => {
    if (!(roleId in this.roles)) {
      console.error("roleId doesn't exist:", roleId);
      return undefined;
    }
    return this.generateRole(roleId);
  }
  /**
   * Return all the rigths that can be change 
   * @returns return a list of rights which all are false by default
   */
  getListOfRights = () => {
    return this.defaultList;
  }

  /**
   * This function allows you to update the data 
   * @param role the role with updated info you want to push
   */
  update = (role: Role) => {
    this.roles[role.id].name = role.name;
    this.roles[role.id].color = role.color;
    this.roles[role.id].rights = role.rights;
  }
  /**
   * This function allows us to save a role
   * @param role a createRole object (name, color, list of rights)
   * @param teamId the id of the team which contain the role
   * @returns a number which is the id of the role created
   */
  save = (teamId: number, role: createRole): number => {
    let data = {
      id: this.nextId++,
      teamId: teamId,
      name: role.name,
      color: role.color,
      rights: this.defaultList
    }
    this.roles[data.id] = data;
    return data.id;
  }
}
