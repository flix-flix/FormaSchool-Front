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
  // M2i
  // Semifir
};
