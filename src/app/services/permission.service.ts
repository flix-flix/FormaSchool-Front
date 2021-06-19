import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PermissionMemberRoleWithoutRights } from '../models/permission/permissionMemberRoleWithoutRights';
import { PermissionRights } from '../models/permission/permissionRights';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http: HttpClient) { }

  findPermissionBySalonId = (salonId: string): Observable<PermissionMemberRoleWithoutRights[]> => {
    return this.http.get<PermissionMemberRoleWithoutRights[]>(`${environment.apiUrl}/permissions/bySalon/${salonId}`);
  }

  findPermissionRightsByPermissionId = (permissionId: string): Observable<PermissionRights> => {
    return this.http.get<PermissionRights>(`${environment.apiUrl}/permissions/permissionRights/${permissionId}`);
  }

  updatePermission = (permission: PermissionRights): Observable<PermissionRights> => {
    return this.http.patch<PermissionRights>(`${environment.apiUrl}/permissions/update`, permission);
  }

  saveFromRole = (salonId: string, roleId: string): Observable<PermissionMemberRoleWithoutRights> => {
    return this.http.post<PermissionMemberRoleWithoutRights>(`${environment.apiUrl}/permissions/addFromRole/${salonId}/${roleId}`, null);
  }
  saveFromMember = (salonId: string, memberId: string): Observable<PermissionMemberRoleWithoutRights> => {
    return this.http.post<PermissionMemberRoleWithoutRights>(`${environment.apiUrl}/permissions/addFromMember/${salonId}/${memberId}`, null);
  }
}
