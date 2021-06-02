import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from '../../messages/services/message.service';
import { SalonNameDesc } from '../../params/salon/model/salonNameDesc';
import { Salon } from './models/salon';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  constructor() { }

  // ================================================================================================

  /** Returns the salon with the given id */
  static findById = (msgId: number): Observable<Salon> => {
    return new Observable<Salon>(observable => {
      observable.next(SalonService.generateSalon(msgId));
      observable.complete();
    });
  }

  /** Returns the salon with the given id */
  static findNameDescById = (salonId: number): Observable<SalonNameDesc> => {
    return new Observable<SalonNameDesc>(observable => {
      observable.next(SalonService.generateSalonNameDesc(salonId));
      observable.complete();
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

  static generateSalonNameDesc = (salonId: number): SalonNameDesc => {
    if (!(salonId in salons)) {
      console.error("salonId doesn't exist:", salonId);
      return undefined;
    }
    return new SalonNameDesc(salons[salonId].id, salons[salonId].name, salons[salonId].desc);
  }
}

let salons: { [id: number]: { id: number, name: string, desc: string, msgs: number[] } } = {
  // IBM
  1: { id: 1, name: "Général", desc: "Messages en tout genre", msgs: [19, 18, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
  2: { id: 2, name: "Nourriture:pizza:", desc: "Comment se pété le bide", msgs: [20, 21, 22, 23] },
  3: { id: 3, name: "Lorem", desc: "Lorem, encore et toujours...", msgs: [40] },

  // IDP
  10: { id: 10, name: "Pole Emploi", desc: "On est là pour vous ! Pôle emploi.", msgs: [100, 101, 102] },

  // M2i
  20: { id: 20, name: "Secrétaria", desc: "Paperasse paperasse...", msgs: [200, 201] },

  // Semifir
  30: { id: 30, name: "Java", desc: "Ce concept est à la base du slogan de Sun pour Java : WORA (Write Once, Run Anywhere)", msgs: [300, 301, 302, 303] },
  31: { id: 31, name: "SQL", desc: "Le SQL (Structured Query Language) est un langage permettant de communiquer avec une base de données", msgs: [320, 321, 322, 323, 324] },
  32: { id: 32, name: "Angular", desc: "Chaque version est prévue pour être compatible avec la version antérieure. Google a promis de faire des mises à jour deux fois par année.", msgs: [340, 341] },
};
