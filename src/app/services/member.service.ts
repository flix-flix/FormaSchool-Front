import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member/member';
import { MemberCreate } from '../models/member/memberCreate';
import { MemberRoles } from '../models/member/memberRoles';
import { MemberUserNamePict } from '../models/member/MemberUserNamePict';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  /**
  * This function allows us to link a user to a team.
  * @param idTeam the id of the team you want to linked
  * @param idUser the id of the user you want to linked
  * @returns It return -1 if the team does not exist in the base, else it return 0 if its ok !
  */
  save = (memberCreate: MemberCreate): Observable<Member> => {
    return this.http.post<Member>(`${environment.apiUrl}/members`, memberCreate.toJSON());
  }

  /**
   * 
   * @param teamId 
   * @returns 
   */
  findMembersByTeamId = (teamId: string): Observable<Member[]> => {
    return this.http.get<Member[]>(environment.apiUrl + "/members/findByTeamId/" + teamId);
  }

  findMembersInTeamWithoutPermissionForSalon = (salonId: string): Observable<MemberUserNamePict[]> => {
    return this.http.get<MemberUserNamePict[]>(`${environment.apiUrl}/members/withoutPermission/${salonId}`);
  }

  addRoleToMember = (member: MemberRoles): Observable<MemberRoles> => {
    return this.http.patch<MemberRoles>(environment.apiUrl + "/members/updateRolesMember", member);
  }
}
