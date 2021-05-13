import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  findAll = () : Observable<User[]> => {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  findById = (id: any) : Observable<User> => {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  save = (user:User) : Observable<User> => {
    return this.http.post<User>(`${environment.apiUrl}/users`, user);
  }

  update = (user:User) => {
    return this.http.put<User>(`${environment.apiUrl}/users`, user);
  }

  delete = (id : any): Observable<User> => {
    return this.http.delete<User>(`${environment.apiUrl}/users/${id}`);
  }
}
