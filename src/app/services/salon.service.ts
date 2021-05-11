import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salon } from '../models/salon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  constructor(private http:HttpClient) { }

  findAll = () : Observable<Salon[]> => {
    return this.http.get<Salon[]>(`${environment.apiUrl}/salons`);
  }

  findById = (id: any) : Observable<Salon> => {
    return this.http.get<Salon>(`${environment.apiUrl}/salons/${id}`);
  }

  save = (salon:Salon) : Observable<Salon> => {
    return this.http.post<Salon>(`${environment.apiUrl}/salons`, salon);
  }

  update = (salon:Salon) => {
    return this.http.put<Salon>(`${environment.apiUrl}/salons`, salon);
  }

  delete = (id : any): Observable<Salon> => {
    return this.http.delete<Salon>(`${environment.apiUrl}/salons/${id}`);
  }
}
