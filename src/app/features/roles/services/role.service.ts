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

  roles: { [id: number]: { id: number, name: string, color: string, rights: { desc: string, value: boolean }[] } } =
    {
      1: {
        id: 1,
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
  static generateRoleWithoutRights = (roleId: number): RoleWithoutRights => {
    if (!(roleId in _roles)) {
      console.error("roleId doesn't exist:", roleId);
      return undefined;
    }
    return new RoleWithoutRights(roleId, _roles[roleId].name, _roles[roleId].color);
  }

  /**
   * This function return the roleObjectWithoutRights you re looking for
   * @param roleId the id you re looking for
   * @returns Return a roleWithoutRights object 
   */
  static findWithoutRightsById = (roleId: number): RoleWithoutRights => {
    return RoleService.generateRoleWithoutRights(roleId);
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
  save = (role: createRole): number => {
    let data = {
      id: this.nextId++,
      name: role.name,
      color: role.color,
      rights: this.defaultList
    }
    this.roles[data.id] = data;
    return data.id;
  }

  static generateRoleName = (roleId: number): Role => {
    if (!(roleId in _roles)) {
      console.error("roleId doesn't exist:", roleId);
      return undefined;
    }
    return new Role(_roles[roleId].id, _roles[roleId].name, _roles[roleId].color, _roles[roleId].rights);
  }

  /**
  * This function allows us to save a role
  * @param role a createRole object (name, color, list of rights)
  * @param teamId the id of the team which contain the role
  * @returns a number which is the id of the role created
  */
  saveUpdateRole = (role: Role): number => {
    let data = {
      id: this.nextId++,
      name: role.name,
      color: role.color,
      rights: this.defaultList
    }
    this.roles[data.id] = data;
    return data.id;
  }
}

let _roles = {
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
    color: "#B2D4EA",
    rights: [
      { desc: "Créer/Editer salon(déplacer salon)", value: true },
      { desc: "Créer/Editer role", value: true },
      { desc: "Permettre de mentionner", value: true },
      { desc: "Editer les messages des autres", value: true }
    ]
  },
  3: {
    id: 3,
    teamId: 1,
    name: "Delegué",
    color: "#FFFFFFF",
    rights: [
      { desc: "Créer/Editer salon(déplacer salon)", value: false },
      { desc: "Créer/Editer role", value: false },
      { desc: "Permettre de mentionner", value: false },
      { desc: "Editer les messages des autres", value: false }
    ]
  }
}