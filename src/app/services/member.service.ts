import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member/member';
import { Observable } from 'rxjs';
import { MemberCreate } from '../models/member/memberCreate';

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
}
