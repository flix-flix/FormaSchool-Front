import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Salon } from '../models/salon/salon';
import { SalonNameDesc } from '../models/salon/salonNameDesc';
import { SalonNameTeam } from '../models/salon/salonNameTeam';
import { EmojiService } from './emoji.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SalonService {
  url = environment.apiUrl + "/salons/";

  constructor(private http: HttpClient, private emojiService: EmojiService, private msgService: MessageService) { }

  // ================================================================================================

  /** Returns the list of the salons for the given team */
  findAllOfTeam = (teamId: string): Observable<SalonNameTeam[]> => {
    return this.http.get<SalonNameTeam[]>(this.url + "ofTeam/" + teamId).pipe(map(salons => {
      salons.forEach(salon => this.emojiService.processEmojiSetter(salon.name, salon.team.id, html => salon.html = html));
      return salons;
    }));
  }

  findById(salonId): Observable<Salon> {
    return this.http.get<Salon>(this.url + salonId).pipe(map(salon => {
      this.emojiService.processEmojiSetter(salon.name, salon.team.id, html => salon.html = html);
      salon.messages = salon.messages.map(msg => this.msgService.fromJSON(msg));
      return salon;
    }));
  }

  // ================================================================================================
  // Params

  findNameDescById = (teamId: string): Observable<SalonNameDesc> => {
    return this.http.get<SalonNameDesc>(this.url + "salonDesc/" + teamId)
  }

  updateSalonNameDesc = (salon: SalonNameDesc): Observable<SalonNameDesc> => {
    return this.http.patch<SalonNameDesc>(this.url + "salonDesc", salon);
  }
}
