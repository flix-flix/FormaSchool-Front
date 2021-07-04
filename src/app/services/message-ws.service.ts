import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { environment } from 'src/environments/environment';
import { Salon } from '../models/salon/salon';
import { UserLocalStorage } from '../models/user/userLocalStorage';
import { EmojiService } from './emoji.service';
import { SalonService } from './salon.service';
import { StorageService } from './storage.service';
import { MessageSend } from '../models/messages/messageSend';
import { MessageEdit } from '../models/messages/MessageEdit';
import { Message } from '../models/messages/message';
import { MsgThreadComponent } from '../components/messages/msg-thread/msg-thread.component';
import { MessageService } from './message.service';
import { MessageDelete } from '../models/messages/messageDelete';
import { ReactionModif } from '../models/reactions/reactionModif';

@Injectable({
  providedIn: 'root'
})
export class MessageWsService {

  private stompClient;
  private salons: { [salonId: string]: Salon } = {};
  private user: UserLocalStorage;

  constructor(private msgService: MessageService, storageService: StorageService, private salonService: SalonService) {
    storageService.subscribe("user", user => this.user = user);
    this.connect();
  }

  // =========================================================================================

  /** Open the WebSockets connections */
  connect() {
    this.stompClient = Stomp.over(new SockJS(environment.apiUrl + "/wsMessages"));
    this.stompClient.debug = null;
    this.stompClient.connect({}, () => this.stompClient.subscribe('/msg/public', this.onMessageReceived));
  }

  /** Link the MsgThread component to its data */
  registerThread(thread: MsgThreadComponent) {
    if (thread.salonId in this.salons) {
      this.salons[thread.salonId].thread = thread;
      this.initThread(this.salons[thread.salonId]);
    }
    else
      this.salonService.findById(thread.salonId).subscribe(_salon => {
        let salon = this.salons[thread.salonId] = {
          ..._salon,
          thread: thread,
          member: this.user.members.find(member => member.team.id == _salon.team.id)
        };
        this.initThread(salon);
      });
  }

  /** Gives the data to the MsgThread  */
  private initThread(salon: Salon) {
    salon.thread.setMessages(salon.messages);
    salon.thread.member = salon.member;
    setTimeout(() => salon.thread.scrollToBottom(), 10);
  }

  // =========================================================================================
  // WebSocket (request)

  /** Send the message with the WebSocket */
  send(msg: MessageSend) {
    msg.memberId = this.user.members.find(member => member.team.id == this.salons[msg.salonId].team.id).id;

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

  /** Send the edited content with the WebSocket */
  edit = (msg: MessageEdit) => this.stompClient.send("/app/chat.edit", {}, JSON.stringify(msg));

  /** Send the message to delete with the WebSocket */
  delete = (msgId: string) => this.stompClient.send("/app/chat.delete", {}, msgId);

  /** Send the reaction to modify with the WebSocket */
  react = (modif: ReactionModif) => this.stompClient.send("/app/chat.react", {}, JSON.stringify(modif));

  // =========================================================================================
  // Messages management

  /** Manage the different "messages" received from the WebSocket */
  private onMessageReceived = (obj: any) => {
    let msg = JSON.parse(obj.body);

    if ("content" in msg)
      this.addOrEditMsg(this.salons[msg.salonId], this.msgService.fromJSON(msg));
    else
      this.deleteMsg(this.salons[msg.salonId], msg);
  }

  /** Process the new messages, the edited messages and the reactions changes */
  private addOrEditMsg(salon: Salon, msg: Message) {
    let edited = false;
    for (let i = 0; i < salon.messages.length; i++)
      if (salon.messages[i].id == msg.id) {
        salon.messages[i] = msg;
        edited = true;
        break;
      }
    if (!edited)
      salon.messages.push(msg);

    salon.thread.setMessages(salon.messages);

    if (!edited && msg.sender.user.id == this.user.id)
      setTimeout(() => salon.thread.scrollToBottom(), 250);
  }

  /** Process the deleted messages */
  private deleteMsg(salon: Salon, msgDelete: MessageDelete) {
    salon.messages = salon.messages.filter(msg => msg.id !== msgDelete.messageId);
    salon.thread.setMessages(salon.messages);
  }
}
