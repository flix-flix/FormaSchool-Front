import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Private } from '../models/private';

@Injectable({
  providedIn: 'root'
})
export class PrivateMsgService {

  constructor(private http: HttpClient) { }

  /** Returns all the private groups of the given user */
  findAllPrivateOfUser(userId: string): Observable<Private[]> {
    return this.http.get<Private[]>(environment.apiUrl + "/private/ofUser/" + userId);
  }
}
