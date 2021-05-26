import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from '../../messages/services/message.service';
import { Salon } from './models/salon';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  constructor() { }

  // ================================================================================================

  /** Returns the salon with the given id */
  static findById = (msgId: number): Observable<Salon> => {
    return new Observable<Salon>(obs => {
      obs.next(SalonService.generateSalon(msgId));
      obs.complete();
    });
  }

  // ================================================================================================
  // TODO [back]

  static generateSalon = (salonId: number): Salon => {
    if (!(salonId in salons)) {
      console.error("salonId doesn't exist:", salonId);
      return undefined;
    }

    let msgs = [];
    for (let msgIndex in salons[salonId].msgs)
      msgs.push(MessageService.generateMessage(salons[salonId].msgs[msgIndex]))
    return new Salon(salons[salonId].id, salons[salonId].name, msgs);
  }
}

let salons: { [id: number]: { id: number, name: string, msgs: number[] } } = {
  // IBM
  1: { id: 1, name: "Général", msgs: [19, 18, 1, 2, 3, 4, 5, 6, 7] },
  2: { id: 2, name: "Nourriture", msgs: [20, 21, 22, 23] },
  3: { id: 3, name: "Lorem", msgs: [40] },

  // IDP
  10: { id: 10, name: "Pole Emploi", msgs: [100, 101, 102] },

  // M2i
  20: { id: 20, name: "Secrétaria", msgs: [200, 201] },

  // Semifir
  30: { id: 30, name: "Java", msgs: [300, 301, 302, 303] },
  31: { id: 31, name: "SQL", msgs: [320, 321, 322] },
  32: { id: 32, name: "Angular", msgs: [340, 341] },
};
