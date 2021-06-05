import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from '../features/params/team/logs/models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  nextId = 10;
  // 0 => create
  // 1 => epinglé
  // 2 => supprimer
  // 3 => createUser
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
      type: 1,
      teamId: 1,
      date: new Date("2021-05-04"),
      desc: "a épinglé un message de Bouchaib dans Géneral",
    },
    {
      id: 3,
      userId: 1,
      type: 0,
      teamId: 1,
      date: new Date("2021-05-04"),
      desc: "a crée un salon",
    },
    {
      id: 4,
      userId: 1,
      type: 2,
      teamId: 1,
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 5,
      userId: 1,
      type: 2,
      teamId: 1,
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 6,
      userId: 10,
      type: 2,
      teamId: 1,
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 7,
      userId: 20,
      type: 2,
      teamId: 2,
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 8,
      userId: 2,
      type: 2,
      teamId: 1,
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 9,
      userId: 2,
      type: 2,
      teamId: 1,
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 10,
      userId: 2,
      type: 3,
      teamId: null,
      date: new Date("2021-06-05"),
      desc: "a créer l'utilisateur Benoit Routier",
    }
  ]

  constructor() { }

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
    let res: Log[] = [];
    this.logs.filter(log => log.teamId == teamId).map(log => {
      res.push(new Log(log.userId, log.type, log.teamId, log.date, log.desc));
    })
    return new Observable<Log[]>(obs => {
      obs.next(res);
      obs.complete();
    });
  }
}
