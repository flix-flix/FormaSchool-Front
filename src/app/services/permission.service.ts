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
}
