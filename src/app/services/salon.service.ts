import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SalonMessage } from '../models/salon/salonMessages';
import { SalonNameDesc } from '../models/salon/salonNameDesc';
import { SalonNameTeam } from '../models/salon/salonNameTeam';
import { Team } from '../models/team/team';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  constructor(private http: HttpClient) { }

  // ================================================================================================

  /** Returns the list of the salons for the given team */
  findAllSalonsNameOfTeam = (teamId: string): Observable<SalonNameTeam[]> => {
    return this.http.get<SalonNameTeam[]>(environment.apiUrl + "/salons/ofTeam/" + teamId);
  }

  findNameDescById = (teamId: string): Observable<SalonNameDesc> => {
    return this.http.get<SalonNameDesc>(environment.apiUrl + "/salons/salonDesc/" + teamId)
  }

  getSalonById = (salonId: String): Observable<SalonNameDesc> => {
    return this.http.get<SalonNameDesc>(`${environment.apiUrl}/salons/${salonId}`);
  }

  // ================================================================================================

  updateSalonNameDesc = (salon: SalonNameDesc): Observable<SalonNameDesc> => {
    return this.http.patch<SalonNameDesc>(environment.apiUrl + "/salons/salonDesc", salon);
  }

  // ================================================================================================

  findById(salonId): Observable<SalonMessage> {
    return this.http.get<SalonMessage>(environment.apiUrl + "/salons/" + salonId);
  }
}
