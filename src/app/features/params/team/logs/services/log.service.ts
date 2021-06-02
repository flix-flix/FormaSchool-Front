import { Injectable } from '@angular/core';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  nextId = 10;

  logs = [
    {
      id: 1,
      picture: "0",
      firstname: "Jason",
      lastname: "Vennin",
      date: new Date("2019-01-16"),
      desc: "a crée l'emoji Kama",
    },
    {
      id: 2,
      picture: "1",
      firstname: "Jacques",
      lastname: "Chirac",
      date: new Date("2021-05-04"),
      desc: "a épinglé un message de Bouchaib dans Géneral",
    },
    {
      id: 3,
      picture: "1",
      firstname: "Jacques",
      lastname: "Chirac",
      date: new Date("2021-05-04"),
      desc: "a crée un salon",
    },
    {
      id: 4,
      picture: "0",
      firstname: "Jason",
      lastname: "Vennin",
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 5,
      picture: "0",
      firstname: "Jason",
      lastname: "Vennin",
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 6,
      picture: "0",
      firstname: "Jason",
      lastname: "Vennin",
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 7,
      picture: "0",
      firstname: "Jason",
      lastname: "Vennin",
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 8,
      picture: "0",
      firstname: "Jason",
      lastname: "Vennin",
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    },
    {
      id: 9,
      picture: "0",
      firstname: "Jason",
      lastname: "Vennin",
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    }
  ]

  constructor() { }

  /**
   * This function return all log
   * @returns return a list of log object (picture, firstname, lastname, date, desc)
   */
  findAll = (): Log[] => {
    let res: Log[] = [];
    this.logs.map(log => {
      res.push(new Log(log.picture, log.firstname, log.lastname, log.date, log.desc));
    });
    return res;
  }
}
