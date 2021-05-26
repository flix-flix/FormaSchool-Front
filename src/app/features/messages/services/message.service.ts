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
  // Pole Emploi
  100: { id: 100, sender: 1, date: "2021-01-05T07:07:35", content: "Bonjour" },
  101: { id: 100, sender: 3, date: "2021-03-05T09:12:43", content: "Salut" },
  102: { id: 100, sender: 2, date: "2021-05-05T15:17:45", content: "Coucou" },

  // ================== M2i ========================
  // Secretaria
  200: { id: 200, sender: 4, date: "2021-05-02T19:47:35", content: "Tuto pour le __souligné__" },
  201: { id: 201, sender: 3, date: "2021-05-05T07:12:35", content: "et celui pour l'*italique*" },

  // ================== Semifir ========================
  // Java
  300: { id: 300, sender: 2, date: "2021-05-05T07:12:35", content: 'List<String> teams = new ArrayList<>(List.of("FormaSchool", "JDR", "Médicaments", "Tinder Jeux"));' },
  301: { id: 301, sender: 1, date: "2021-05-05T07:13:35", content: 'String nbTeams = "" + teams.size();' },
  302: { id: 302, sender: 4, date: "2021-05-05T07:13:36", content: 'System.out.println(String.join(", ", lilist));' },
  303: { id: 303, sender: 3, date: "2021-05-05T07:13:37", content: "teams.stream().forEach(System.out::println);" },

  // SQL
  320: { id: 320, sender: 3, date: "2021-05-05T23:51:35", content: "**SELECT** * **FROM** Teams" },
  321: { id: 321, sender: 2, date: "2021-05-05T23:51:36", content: "**DROP DATABASE** FormaSchool" },
  322: { id: 322, sender: 3, date: "2021-05-05T23:52:37", content: "Savoir effectuer des requêtes n’est pas trop difficile, mais il convient de véritablement comprendre comment fonctionne le stockage des données et la façon dont elles sont lues pour **__optimiser les performances__**. Les optimisations sont basées dans 2 catégories: les bons choix à faire lorsqu’il faut définir la **__structure de la base de données__** et les méthodes les plus adaptées pour **__lire les données__**." },

  // Angular
  340: { id: 340, sender: 4, date: "2021-05-05T07:01:35", content: "**@Input()** team" },
  341: { id: 341, sender: 3, date: "2021-05-05T12:02:36", content: '**routerLink**="/404"' },
};
