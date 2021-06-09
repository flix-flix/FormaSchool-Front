import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Log } from '../features/params/team/logs/models/log';

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
   * This function return all log
   * @returns return a list of log object (picture, firstname, lastname, date, desc)
   */
  findAll = (): Observable<Log[]> => {
    let res: Log[] = [];
    this.logs.map(log => {
      res.push(new Log(log.userId, log.type, log.teamId, log.date, log.desc));
    });
    return new Observable<Log[]>(obs => {
      obs.next(res);
      obs.complete();
    });
  }

  /**
   * This function return all log which contain your teamId
   * @param teamId the id of the team you are looking for
   * @returns return a list of log object (picture, firstname, lastname, date, desc)
   */
  findByTeam = (teamId: number): Observable<Log[]> => {
    //return this.http.get<Log[]>(`${environment.urlSpring}/logs/withoutId/${teamId}`);
    let res: Log[] = [];
    this.logs.filter(log => log.teamId == teamId).map(log => {
      res.push(new Log(log.userId, log.type, log.teamId, log.date, log.desc));
    })
    return new Observable<Log[]>(obs => {
      obs.next(res);
      obs.complete();
    });
  }

  /**
   * This function allow you to push a log
   * @param log the log you want to add
   *  userId: the user who made the log
   * 
   *  teamId: the teamId, case Admin(no team) put 0 
   *  date: date of creation
   *  desc: a quick description of what was made
   */
  addLog = (log: Log) => {
    let data = {
      id: this.nextId++,
      userId: log.userId,
      type: log.type,
      teamId: log.teamId,
      date: log.date,
      desc: log.desc
    }
    this.logs.push(data);
  }
}
