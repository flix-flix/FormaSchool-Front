import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddUserToTeamService {

  constructor(private http:HttpClient) { }

  findAll = () : Observable<any> => {
    return this.http.get<any[]>(`${environment.apiUrl}/user_has_team`);
  }

  findById = (id: any) : Observable<any> => {
    return this.http.get<any>(`${environment.apiUrl}/user_has_team/${id}`);
  }

  save = (data: {userId: number, teamId: number}) : Observable<any> => {
    return this.http.post<any>(`${environment.apiUrl}/user_has_team`, data);
  }

  update = (data:{userId: number, teamId: number}) => {
    return this.http.put<any>(`${environment.apiUrl}/user_has_team`, data);
  }

  delete = (id : any): Observable<any> => {
    return this.http.delete<any>(`${environment.apiUrl}/user_has_team/${id}`);
  }
}
