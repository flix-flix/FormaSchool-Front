import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';
import * as Stomp from 'stompjs';
import { MsgThreadComponent } from '../features/messages/components/msg-thread/msg-thread.component';
import { Message } from '../models/message';
import { MessageSend } from '../models/messages/messageSend';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) {
    this.connect();
  }

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

  delete = (msgId: string) => {
    return this.http.delete(environment.apiUrl + "/messages/deleteMsg/" + msgId)
  }

  // =========================================================================================

  findAllMessageOfSalon(salonId: string): Observable<Message[]> {
    return this.http.get<Message[]>(environment.apiUrl + "/messages/salonWithReacts/" + salonId);
  }

  // =========================================================================================

  stompClient;
  salons: { [salonId: string]: MsgThreadComponent } = {};

  connect() {
    this.stompClient = Stomp.over(new SockJS(environment.apiUrl + "/wsMessages"));
    this.stompClient.connect({}, this.onConnect);
  }

  onConnect = () => {
    this.stompClient.subscribe('/topic/public', this.onMessageReceived);
  }

  registerThread(salonId: string, thread: MsgThreadComponent) {
    this.salons[salonId] = thread;
  }

  // =========================================================================================

  sendWs(msg: MessageSend) {
    if (msg.file != undefined) {
      let reader = new FileReader();
      reader.readAsDataURL(msg.file);
      reader.onloadend = () => this._sendWs(msg, reader.result);
    } else
      this._sendWs(msg);
  }

  private _sendWs(msg: MessageSend, file = null) {
    let _data = { memberId: msg.memberId, salonId: msg.salonId, content: msg.content, fileName: msg.file?.name, file: file };
    this.stompClient.send("/app/chat.send", {}, JSON.stringify(_data));
  }

  deleteWs(msgId: string) {
    this.stompClient.send("/app/chat.delete", {}, msgId);
  }

  // =========================================================================================

  onMessageReceived = (obj) => {
    let msg = JSON.parse(obj.body);

    if ("content" in msg) // New
      this.salons[msg.salonId].addMsg(Message.fromJSON(msg), true);
    else // Delete
      this.salons[msg.salonId].removeMsg(msg.messageId);
  }
}
