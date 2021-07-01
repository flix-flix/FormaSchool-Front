import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoleCreate } from '../models/role/roleCreate';
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

  findRoleWithoutRightsInTeamWithoutPermission = (salonId): Observable<RoleWithoutRights[]> => {
    return this.http.get<RoleWithoutRights[]>(`${environment.apiUrl}/roles/withoutPermission/${salonId}`);
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
   * This function allows you to update a role 
   * @param role the role with updated info you want to push
   */
  update = (role: Role): Observable<Role> => {
    return this.http.patch<Role>(`${environment.apiUrl}/roles/update`, role);
  }

  save = (teamId: string, createRole: RoleCreate): Observable<Role> => {
    return this.http.post<Role>(`${environment.apiUrl}/roles/createRole/${teamId}`, createRole);
  }

  /**
   * Delete a role
   * @param idRole The id of the role you want to delete 
   */
  delete = (teamId: string, roleId: string): Observable<any> => {
    return this.http.delete(`${environment.apiUrl}/roles/delete/${teamId}/${roleId}`);
  }
}