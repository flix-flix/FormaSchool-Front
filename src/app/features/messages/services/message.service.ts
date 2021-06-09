import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  nextId = 10_000;

  constructor(private http: HttpClient) { }

  // TODO [Websocket]
  post = (msg: Message, salonId: number) => {
    // msgs[this.nextId] = { id: this.nextId++, sender: +msg.sender.user.id, salon: salonId, date: msg.send.toString(), content: msg.content, file: undefined };
  }

  // TODO [Back]
  delete = (msgId: number) => {
  }

  findAllMessageOfSalon(salonId: number): Observable<Message[]> {
    return this.http.get<Message[]>(environment.apiUrl + "/messages/salonWithReacts/" + salonId);
  }
}
