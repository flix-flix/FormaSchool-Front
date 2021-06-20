import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message';
import { MessageSend } from '../models/messages/messageSend';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  sendMessage = (msg: MessageSend) => {
    let data = new FormData();
    data.append("memberId", msg.memberId);
    data.append("salonId", msg.salonId);
    data.append("content", msg.content);

    if (msg.file == undefined)
      return this.http.post<Message>(environment.apiUrl + "/messages/sendMsg", data).pipe(map(json => Message.fromJSON(json)));

    data.append("file", msg.file);
    return this.http.post<Message>(environment.apiUrl + "/messages/sendMsgWithFile", data).pipe(map(json => Message.fromJSON(json)));
  }

  // TODO [Back]
  delete = (msgId: string) => {
    return this.http.delete(environment.apiUrl + "/messages/deleteMsg/" + msgId)
  }

  // TODO [Websocket]
  post = (msg: Message, salonId: number) => {
  }


  findAllMessageOfSalon(salonId: string): Observable<Message[]> {
    return this.http.get<Message[]>(environment.apiUrl + "/messages/salonWithReacts/" + salonId);
  }
}
