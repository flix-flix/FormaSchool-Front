import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from '../features/messages/services/message.service';
import { SalonNameDesc } from '../features/params/salon/model/salonNameDesc';
import { Salon } from '../models/salon';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  constructor() { }

  // ================================================================================================

  /** Returns the salon with the given id */
  findById = (msgId: number): Observable<Salon> => {
    return new Observable<Salon>(observable => {
      observable.next(SalonService.generateSalon(msgId));
      observable.complete();
    });
  }

  /** Returns the salon with the given id */
  findNameDescById = (salonId: number): Observable<SalonNameDesc> => {
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
    return new Salon(salons[salonId].id, salons[salonId].teamId, salons[salonId].name, MessageService.generateAllMessageOfSalon(salonId, salons[salonId].teamId));
  }

  static generateSalonNameDesc = (salonId: number): SalonNameDesc => {
    if (!(salonId in salons)) {
      console.error("salonId doesn't exist:", salonId);
      return undefined;
    }
    return new SalonNameDesc(salons[salonId].id, salons[salonId].name, salons[salonId].desc);
  }
}

let salons: { [id: number]: { id: number, teamId: number, name: string, desc: string } } = {
  // IBM
  1: { id: 1, teamId: 1, name: "Général", desc: "Messages en tout genre" },
  2: { id: 2, teamId: 1, name: "Nourriture:pizza:", desc: "Comment se pété le bide" },
  3: { id: 3, teamId: 1, name: "Lorem", desc: "Lorem, encore et toujours..." },

  // IDP
  10: { id: 10, teamId: 2, name: "Pole Emploi", desc: "On est là pour vous ! Pôle emploi." },

  // M2i
  20: { id: 20, teamId: 3, name: "Secrétaria", desc: "Paperasse paperasse..." },

  // Semifir
  30: { id: 30, teamId: 10, name: "Java", desc: "Ce concept est à la base du slogan de Sun pour Java : WORA (Write Once, Run Anywhere)" },
  31: { id: 31, teamId: 10, name: "SQL", desc: "Le SQL (Structured Query Language) est un langage permettant de communiquer avec une base de données" },
  32: { id: 32, teamId: 10, name: "Angular", desc: "Chaque version est prévue pour être compatible avec la version antérieure. Google a promis de faire des mises à jour deux fois par année." },
};
