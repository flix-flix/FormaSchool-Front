import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';
import * as Stomp from 'stompjs';
import { MsgThreadComponent } from '../components/messages/msg-thread/msg-thread.component';
import { FileModel } from '../models/file';
import { Message } from '../models/messages/message';
import { MessageEdit } from '../models/messages/MessageEdit';
import { MessageSend } from '../models/messages/messageSend';
import { Salon } from '../models/salon/salon';
import { UserLocalStorage } from '../models/user/userLocalStorage';
import { EmojiService } from './emoji.service';
import { SalonService } from './salon.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  stompClient;
  salons: { [salonId: string]: Salon } = {};
  user: UserLocalStorage;

  constructor(private http: HttpClient, storageService: StorageService, private salonService: SalonService, private emojiService: EmojiService) {
    storageService.subscribe("user", user => this.user = user);
    this.connect();
  }

  // =========================================================================================

  fromJson(msg: Message): Message {
    msg.file = FileModel.fromJSON(msg.file);
    msg.send = new Date(msg.send[0], msg.send[1] - 1, msg.send[2], msg.send[3], msg.send[4], msg.send[5]);
    if (msg.edit != null)
      msg.edit = new Date(msg.edit[0], msg.edit[1] - 1, msg.edit[2], msg.edit[3], msg.edit[4], msg.edit[5]);

    msg.html = this.processHtml(msg.content);

    //TODO teamID for msg emoji
    this.emojiService.processEmojiSetter(msg.html, "und3f1n3d", html => msg.html = html);

    return msg;
  }

  /** Generate an HTML representation of the content (with tags if markdown is used)
       * @param content The original string
       * @param replace true: remove the markdown markers
       */
  processHtml = (content: string, replace: boolean = true): string => {
    let html = content.replace(/\n/g, "<br>");
    html = html.replace(/  /g, " &nbsp;");//TODO [Improve] space -> &nbsp;

    html = this.processHtmlSpan(html, "**", "bold", replace);
    html = this.processHtmlSpan(html, /((?<!\*)\*{1}(?!\*))|\*{3}/, "italic", replace); // *italic* | ***italic***
    html = this.processHtmlSpan(html, "__", "under", replace);
    html = this.processHtmlSpan(html, "~~", "strike", replace);

    html = this.processHtmlSpan(html, "```", "md_bloc", replace);
    html = this.processHtmlSpan(html, /((?<!`)`{1}(?!`))/, "md_bloc_inline", replace);

    return html;
  }

  /**
  * Add HTML tags for the given md marker
  * 
  * @param content The original string
  * @param search The markdown marker
  * @param clas The HTML class
  * @param replace true: remove the markdown markers
  * @returns A new string with the HTML tags
  */
  processHtmlSpan = (content: string, search: string | RegExp, clas: string, replace: boolean = true): string => {
    let html = "";
    let first = 0, second = 0, prev = 0;
    let len = typeof search === "string" ? search.length : (["italic", "md_bloc_inline"].includes(clas) ? 1 : 2);

    // If contains 2 occurences of the given "md marker"
    while ((first = this.indexOf(content, search, prev)) != -1
      && (second = this.indexOf(content, search, first + len)) != -1) {
      html += content.substring(prev, first);
      html += `<span class="${clas}">${content.substring(first + (replace ? len : 0), second + (replace ? 0 : len))}</span>`;
      prev = second + len;
    }

    // Add the remaining content
    return html + content.substring(prev);
  }

  // ================================================================================================
  // TODO [Utils]

  /** indexOf (string and regex) */
  indexOf = (text: string, search: string | RegExp, start: number) => {
    if (typeof search === "string")
      return text.indexOf(<string>search, start); // string
    let index = text.slice(start).search(search); // regex
    return index < 0 ? index : index + start; // return -1
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
    if (thread.salonId in this.salons) {
      this.salons[thread.salonId].thread = thread;
      this.initThread(this.salons[thread.salonId]);
    }
    else
      this.salonService.findById(thread.salonId).subscribe(_salon => {
        this.salons[thread.salonId] = {
          id: thread.salonId,
          teamId: _salon.team.id,
          name: _salon.name,
          msgs: _salon.messages.map(msg => this.fromJson(msg)),
          thread: thread,
          member: this.user.members.find(member => member.team.id == _salon.team.id)
        };

        // TODO [GET]
        let salon = this.salons[thread.salonId];
        salon.msgs.forEach(msg => this.emojiService.processEmojiSetter(msg.content, salon.teamId, html => msg.content = html));
        this.emojiService.processEmojiSetter(salon.name, salon.teamId, html => salon.html = html);
        this.initThread(salon);
      });
  }

  initThread(salon) {
    salon.thread.setMessages(salon.msgs);
    salon.thread.member = salon.member;
    setTimeout(() => salon.thread.scrollToBottom(), 10);
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
      this.addOrEditMsg(this.salons[msg.salonId], this.fromJson(msg));
    else
      this.deleteMsg(this.salons[msg.salonId], msg);
  }

  private addOrEditMsg(salon, msg: Message) {
    this.emojiService.processEmojiSetter(msg.content, salon.teamId, html => msg.content = html);

    let edited = false;
    for (let i = 0; i < salon.msgs.length; i++)
      if (salon.msgs[i].id == msg.id) {
        salon.msgs[i] = msg;
        edited = true;
        break;
      }
    if (!edited)
      salon.msgs.push(msg);

    salon.thread.setMessages(salon.msgs);

    // TODO
    // if (msg.sender. == this.memberId)
    if (!edited)
      setTimeout(() => salon.thread.scrollToBottom(), 250);
  }

  private deleteMsg(salon, msgDelete) {
    salon.msgs = salon.msgs.filter(msg => msg.id !== msgDelete.messageId);
    salon.thread.setMessages(salon.msgs);
  }
}
