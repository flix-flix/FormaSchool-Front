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
  logs = [
    {
      id: 1,
      userId: 2,
      type: 0,
      teamId: 1,
      date: new Date("2019-01-16"),
      desc: "a crée l'emoji Kama",
    },
    {
      id: 2,
      userId: 1,
      type: 6,
      teamId: 1,
      date: new Date("2021-05-04"),
      desc: "a épinglé un message de Bouchaib dans Géneral",
    },
    {
      id: 3,
      userId: 1,
      type: 3,
      teamId: 1,
      date: new Date("2021-05-04"),
      desc: "a crée un salon",
    },
    {
      id: 4,
      userId: 1,
      type: 5,
      teamId: 1,
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 5,
      userId: 1,
      type: 5,
      teamId: 1,
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 6,
      userId: 10,
      type: 5,
      teamId: 1,
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 7,
      userId: 20,
      type: 5,
      teamId: 2,
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 8,
      userId: 2,
      type: 5,
      teamId: 1,
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 9,
      userId: 2,
      type: 4,
      teamId: 1,
      date: new Date("2021-05-04"),
      desc: "a modifie un salon",
    },
    {
      id: 10,
      userId: 2,
      type: 8,
      teamId: 0,
      date: new Date("2021-06-05"),
      desc: "a créer l'utilisateur Benoit Routier",
    },
    {
      id: 11,
      userId: 2,
      type: 1,
      teamId: 1,
      date: new Date("2019-01-16"),
      desc: "a Modifier l'emoji Kama",
    },
    {
      id: 1,
      userId: 2,
      type: 11,
      teamId: 0,
      date: new Date("2019-01-16"),
      desc: "a crée l'equipe Dofus",
    }
  ]

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
