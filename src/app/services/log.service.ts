import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  nextId = 12;
  //0 => creer emojis
  //1 => modifier emojis
  // 2 => supprimer emojis
  // 3 => creer salon
  // 4 => modifier salon
  // 5 => supprimer salon
  // 6 => epingle msg
  // 7 => supprimer msg epingle
  // 8 => creer un utilisateur
  // 9 => modifier un utilisateur
  // 10 => supprimer utilisateur
  // 11 => creer une equipe
  // 12 => modifier une equipe
  // 13 => supprimer une equipe

  constructor(private http: HttpClient) { }

  /**
   * This function return admin log
   * @returns return a list of log object (picture, firstname, lastname, date, desc)
   */
  findAdminLogs = (): Observable<Log[]> => {
    return this.http.get<Log[]>(`${environment.apiUrl}/logs/withoutId/adminLogs`);
  }

  /**
   * This function return all log which contain your teamId
   * @param teamId the id of the team you are looking for
   * @returns return a list of log object (UserNamePict, type, date, desc)
   */
  findByTeam = (teamId: String): Observable<Log[]> => {
    return this.http.get<Log[]>(`${environment.apiUrl}/logs/withoutId/${teamId}`);
  }
}
