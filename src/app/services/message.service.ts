import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';
import * as Stomp from 'stompjs';
import { MsgThreadComponent } from '../components/messages/msg-thread/msg-thread.component';
import { Message } from '../models/messages/message';
import { MessageEdit } from '../models/messages/MessageEdit';
import { MessageSend } from '../models/messages/messageSend';
import { Salon } from '../models/salon/salon';
import { UserLocalStorage } from '../models/user/userLocalStorage';
import { SalonService } from './salon.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  stompClient;
  salons: { [salonId: string]: Salon } = {};
  user: UserLocalStorage;

  constructor(private http: HttpClient, storageService: StorageService, private salonService: SalonService) {
    storageService.subscribe("user", user => this.user = user);
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
      this.salonService.findById(thread.salonId).subscribe(salon =>
        this.salons[thread.salonId] = new Salon(thread.salonId, salon.team.id, salon.name, salon.messages.map(msg => Message.fromJSON(msg)), thread,
          this.user.members.find(member => member.team.id == salon.team.id)));
    // this.findAllMessageOfSalon(thread.salonId).subscribe(msgs =>
    //   this.salons[thread.salonId] = new Salon(thread.salonId, "none", "no_name", msgs.map(msg => Message.fromJSON(msg)), thread));
  }

  // =========================================================================================
  // WebSocket (request)

  send(msg: MessageSend) {
    msg.memberId = this.user.members.find(member => member.team.id == this.salons[msg.salonId].teamId).id;

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

  edit = (msg: MessageEdit) => this.stompClient.send("/app/chat.edit", {}, JSON.stringify(msg));

  delete = (msgId: string) => this.stompClient.send("/app/chat.delete", {}, msgId);

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
