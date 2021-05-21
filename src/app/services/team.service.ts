import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  findAll = (): Observable<Team[]> => {
    return this.http.get<Team[]>(`${environment.apiUrl}/teams`);
  }

  findById = (id: any): Observable<Team> => {
    return this.http.get<Team>(`${environment.apiUrl}/teams/${id}`);
  }

  save = (team: Team): Observable<Team> => {
    return this.http.post<Team>(`${environment.apiUrl}/teams`, team);
  }

  update = (team: Team) => {
    return this.http.put<Team>(`${environment.apiUrl}/teams`, team);
  }

  delete = (id: any): Observable<Team> => {
    return this.http.delete<Team>(`${environment.apiUrl}/teams/${id}`);
  }

}
