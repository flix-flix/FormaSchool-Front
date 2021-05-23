import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  count = 10;

  logs = [
    {
      id: 1,
      firstname: "Jason",
      lastname: "Vennin",
      date: new Date("2019-01-16"),
      desc: "a crée l'emoji Kama",
    },
    {
      id: 2,
      firstname: "Jacques",
      lastname: "Chirac",
      date: new Date("2021-05-04"),
      desc: "a épinglé un message de Bouchaib dans Géneral",
    },
    {
      id: 3,
      firstname: "Jacques",
      lastname: "Chirac",
      date: new Date("2021-05-04"),
      desc: "a crée un salon",
    },
    {
      id: 4,
      firstname: "Jason",
      lastname: "Vennin",
      date: new Date("2021-05-04"),
      desc: "a supprimé un salon",
    }
  ]

  constructor() { }

}
