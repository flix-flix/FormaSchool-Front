import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRole } from '../models/role/createRole';
import { Role } from '../models/role/role';
import { RoleWithoutRights } from '../models/role/roleWithoutRights';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  nextId = 10;
  defaultList = [
    { desc: "Créer/Editer salon(déplacer salon)", value: false },
    { desc: "Créer/Editer role", value: false },
    { desc: "Permettre de mentionner", value: false },
    { desc: "Supprimer les messages des autres", value: false }
  ];


  constructor(private http: HttpClient) { }

  /**
   * This function return a role Object from his id
   * @param roleId the id of the role you re looking for
   * @returns a Role object with the id you were looking for
   */
  // static generateRole = (roleId: number): Role => {
  //   if (!(roleId in roles)) {
  //     console.error("roleId doesn't exist:", roleId);
  //     return undefined;
  //   }
  //   return new Role(roleId, roles[roleId].name, roles[roleId].color, roles[roleId].rights);
  // }

  /**
   * This function return a roleWithoutRights Object from his id
   * @param roleId the id of the role you re looking for
   * @returns a RoleWithoutRights object with the id you were looking for
   */
  static generateRoleWithoutRights = (roleId: string): RoleWithoutRights => {
    if (!(roleId in roles)) {
      console.error("roleId doesn't exist:", roleId);
      return undefined;
    }
    return new RoleWithoutRights(roleId, roles[roleId].name, roles[roleId].color);
  }

  /**
   * This function return the roleObjectWithoutRights you re looking for
   * @param roleId the id you re looking for
   * @returns Return a roleWithoutRights object 
   */
  static findWithoutRightsById = (roleId: string): Observable<RoleWithoutRights> => {
    return new Observable<RoleWithoutRights>(obs => {
      obs.next(RoleService.generateRoleWithoutRights(roleId));
      obs.complete();
    });
  }

  findAllWithoutRightsByTeamId = (teamId: string): Observable<RoleWithoutRights[]> => {
    return this.http.get<RoleWithoutRights[]>(`${environment.apiUrl}/roles/withoutRights/${teamId}`);
  }

  /**
   * This function return a Role object with the id you re looking for
   * @param roleId the id of the role you re looking for
   * @returns a Role object
   */
  findRoleById = (roleId: string): Observable<Role> => {
    return this.http.get<Role>(`${environment.apiUrl}/roles/withDesc/${roleId}`);
  }
  /**
   * Return all the rigths that can be change 
   * @returns return a list of rights which all are false by default
   */
  getListOfRights = () => {
    return this.defaultList;
  }

  /**
   * This function allows you to update a role 
   * @param role the role with updated info you want to push
   */
  update = (role: Role): Observable<Role> => {
    return this.http.patch<Role>(`${environment.apiUrl}/roles/update`, role);
  }

  /**
   * This function allows us to save a role
   * @param role a createRole object (name, color, list of rights)
   * @param teamId the id of the team which contain the role
   * @returns a number which is the id of the role created
   */
  save = (teamId: string, createRole: createRole): Observable<Role> => {
    return this.http.post<Role>(`${environment.apiUrl}/roles/createRole/${teamId}`, createRole.toJSON());
  }

  /**
   * Delete a role
   * @param idRole The id of the role you want to delete 
   */
  delete = (teamId: string, roleId: string): Observable<any> => {
    return this.http.delete(`${environment.apiUrl}/roles/delete/${teamId}/${roleId}`);
  }

  // static generateRoleName = (roleId: number): Role => {
  //   if (!(roleId in roles)) {
  //     console.error("roleId doesn't exist:", roleId);
  //     return undefined;
  //   }
  //   return new Role(roles[roleId].id, roles[roleId].name, roles[roleId].color, roles[roleId].rights);
  // }

  /**
  * This function allows us to save a role
  * @param role a createRole object (name, color, list of rights)
  * @param teamId the id of the team which contain the role
  * @returns a number which is the id of the role created
  */
  saveUpdateRole = (role: Role): Observable<number> => {
    let data = {
      id: this.nextId++,
      name: role.name,
      color: role.color,
      rights: this.defaultList
    }
    roles[data.id] = data;
    return new Observable<number>(obs => {
      obs.next(data.id);
      obs.complete();
    });
  }
}

let roles = {
  1: {
    id: 1,
    teamId: 1,
    name: "everyone",
    color: "#A2D0EA",
    rights: [
      { desc: "Créer/Editer salon(déplacer salon)", value: false },
      { desc: "Créer/Editer role", value: true },
      { desc: "Permettre de mentionner", value: false },
      { desc: "Supprimer les messages des autres", value: true }
    ]
  },
  2: {
    id: 2,
    teamId: 1,
    name: "SuperRole",
    color: "#fcba03",
    rights: [
      { desc: "Créer/Editer salon(déplacer salon)", value: true },
      { desc: "Créer/Editer role", value: true },
      { desc: "Permettre de mentionner", value: true },
      { desc: "Supprimer les messages des autres", value: true }
    ]
  },
  3: {
    id: 3,
    teamId: 1,
    name: "Delegué",
    color: "#dbff29",
    rights: [
      { desc: "Créer/Editer salon(déplacer salon)", value: false },
      { desc: "Créer/Editer role", value: false },
      { desc: "Permettre de mentionner", value: false },
      { desc: "Supprimer les messages des autres", value: false }
    ]
  }
}