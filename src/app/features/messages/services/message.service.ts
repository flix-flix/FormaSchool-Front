import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  /** Returns the message with the given id */
  static findById = (msgId: number): Observable<Message> => {
    return new Observable<Message>(obs => {
      obs.next(MessageService.generateMessage(msgId));
      obs.complete();
    });
  }

  // ================================================================================================
  // TODO [back]

  static generateMessage = (msgId: number): Message => {
    if (!(msgId in msgs)) {
      console.error("msgId doesn't exist:", msgId);
      return undefined;
    }
    return new Message(msgs[msgId].id, users[msgs[msgId].sender], new Date(msgs[msgId].date), msgs[msgId].content);
  }

}

// ================================================================================================
// TODO [back]

let users = [UserService.generateUserNamePicture(1), UserService.generateUserNamePicture(1), UserService.generateUserNamePicture(2),
UserService.generateUserNamePicture(10), UserService.generateUserNamePicture(20)];

let msgs: { [id: number]: { id: number, sender: number, date: string, content: string } } = {
  // ================== IBM ========================
  // Général
  19: { id: 19, sender: 1, date: "2021-05-01T17:36:11", content: "Salut" },
  18: { id: 18, sender: 2, date: "2021-05-01T17:36:27", content: "Hi, salut les mecs" },
  1: { id: 1, sender: 3, date: "2021-05-01T17:37:31", content: "Bien ou bien ?" },
  2: { id: 2, sender: 4, date: "2021-05-01T17:43:07", content: "trkl" },
  3: { id: 3, sender: 4, date: "2021-05-02T09:07:44", content: "Guys ?" },

  4: { id: 4, sender: 1, date: "2021-05-02T09:07:46", content: "123**456**789" },
  5: { id: 5, sender: 2, date: "2021-05-02T09:08:01", content: "123**456**789**123**456" },
  6: { id: 6, sender: 3, date: "2021-05-02T09:08:27", content: "text*italic*text" },

  7: { id: 7, sender: 1, date: "2021-05-05T17:18:19", content: "Normal\n\n**Bold**\n\n*Italic*\n\n__Under__\n\n~~Strike~~\n\n***__~~All~~__***" },

  // Nourriture
  20: { id: 20, sender: 1, date: "2021-05-01T17:35:21", content: "Welsh" },
  21: { id: 21, sender: 2, date: "2021-05-04T09:27:07", content: "Frites !" },
  22: { id: 22, sender: 4, date: "2021-05-04T10:01:21", content: "Hamburger" },
  23: { id: 23, sender: 3, date: "2021-05-05T07:12:35", content: "Kebab" },

  // Lorem
  40: {
    id: 40, sender: 0, date: "2021-10-10T22:11:00", content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
      Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.
      
      Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.`},

  // ================== IDP ========================
  // ================== M2i ========================
  // ================== Semifir ========================
};
