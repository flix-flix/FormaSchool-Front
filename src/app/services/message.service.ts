import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';
import * as Stomp from 'stompjs';
import { MsgThreadComponent } from '../components/messages/msg-thread/msg-thread.component';
import { Message } from '../models/messages/message';
import { MessageSend } from '../models/messages/messageSend';
import { Salon } from '../models/salon/salon';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  stompClient;
  salons: { [salonId: string]: Salon } = {};

  constructor(private http: HttpClient) {
    this.connect();
  }

  // =========================================================================================
  // REST

  findAllMessageOfSalon = (salonId: string): Observable<Message[]> =>
    this.http.get<Message[]>(environment.apiUrl + "/messages/salonWithReacts/" + salonId);

  // =========================================================================================
  // WebSocket (settings)

  connect() {
    this.stompClient = Stomp.over(new SockJS(environment.apiUrl + "/wsMessages"));
    this.stompClient.debug = null;
    this.stompClient.connect({}, () => this.stompClient.subscribe('/topic/public', this.onMessageReceived));
  }

  registerThread(thread: MsgThreadComponent) {
    if (thread.salonId in this.salons)
      this.salons[thread.salonId].setThread(thread);
    else
      this.findAllMessageOfSalon(thread.salonId).subscribe(msgs =>
        this.salons[thread.salonId] = new Salon(thread.salonId, thread.teamId, "no_name", msgs.map(msg => Message.fromJSON(msg)), thread));
  }

  // =========================================================================================
  // WebSocket (request)

  send(msg: MessageSend) {
    if (msg.file == undefined)
      this._send(msg);
    else {
      let reader = new FileReader();
      reader.onloadend = () => this._send(msg, reader.result);
      reader.readAsDataURL(msg.file);
    }
  }

  private _send = (msg: MessageSend, fileContent = null) =>
    this.stompClient.send("/app/chat.send", {}, JSON.stringify(fileContent ? { ...msg, file: fileContent } : msg));

  deleteMsg = (msgId: string) => this.stompClient.send("/app/chat.delete", {}, msgId);

  // =========================================================================================
  // Messages management

  private onMessageReceived = (obj) => {
    let msg = JSON.parse(obj.body);

    if ("content" in msg)
      this.salons[msg.salonId].addMsg(Message.fromJSON(msg));
    else
      this.salons[msg.salonId].deleteMsg(msg);
  }
}
