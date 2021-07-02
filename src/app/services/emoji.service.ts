import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmojisSelectorComponent } from '../components/messages/emojis-selector/emojis-selector.component';
import { EmojiCreate } from '../models/emoji/emojiCreate';
import { EmojiDesc } from '../models/emoji/emojiDesc';
import { EmojiNamePict } from '../models/emoji/emojiNamePict';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {
  url = environment.apiUrl + "/emojis/";

  /** path to the folder of the emojis [team, organization, default] */
  paths = [/*"emojisTeams/",*/ "emojisOrga/", "emojis/"];

  json: EmojiDesc[] = [];
  /** give id to the emoji without id*/
  nextEmojiId = 1_000_000;
  /** selectors waiting to be filled with emojis */
  selectors: EmojisSelectorComponent[] = [];
  /** string/setters waiting to be processed till the emojis are downloaded */
  waiting: Function[] = [];

  constructor(private http: HttpClient, private utilsService: UtilsService) {
    this.http.get<any[]>(this.url + "json").subscribe(json => {
      json.forEach(item => item.order = (item.order == "" ? this.nextEmojiId++ : item.order));

      this.json = <EmojiDesc[]>json;
      this.json.sort((a, b) => a.order - b.order);
      this.json.forEach(item => item.annotation = item.annotation.substr(0, item.annotation.length - 2));
      this.json = this.json.filter(item => !item.annotation.includes("skin"));

      // === Process the already loaded selectors ===
      this.waiting.forEach(process => process());
      this.selectors.forEach(select => select.emojis = this.json.slice(0, 15));

      setTimeout(() => this.selectors.forEach(select => select.emojis = this.json.slice(0, 50)), 1000);
      setTimeout(() => this.selectors.forEach(select => select.emojis = this.json.slice(0, 100)), 4000);
      // setTimeout(() => this.selectors.forEach(select => select.emojis = this.json.slice(0, 150)), 8000);
      // setTimeout(() => this.selectors.forEach(select => select.emojis = this.json.slice(0, 200)), 12000);
    });
  }

  //========================================= Emoji Created ======================================
  // REST

  findCreatedEmojiByTeamId = (teamId: string): Observable<EmojiCreate[]> => {
    return this.http.get<EmojiCreate[]>(`${environment.apiUrl}/emojis/createdEmojis/${teamId}`);
  }

  findCreatedEmojiOrga = (): Observable<EmojiCreate[]> => {
    return this.http.get<EmojiCreate[]>(`${environment.apiUrl}/emojis/createdEmojisOrga`);
  }

  /**
   * This function allows you to add a emoji
   * @param emoji the CreatedEmoji you want to add 
   * @returns the emoji created 
   */
  addEmoji = (emoji: EmojiCreate): Observable<EmojiCreate> => {
    return this.http.post<EmojiCreate>(`${environment.apiUrl}/emojis/createdEmojis`, emoji);
  }

  /**
   * This function allws you to update the emoji
   * @param emoji a Created Emoji that you want to update
   */
  updateCreatedEmoji = (emoji: EmojiCreate): Observable<EmojiCreate> => {
    return this.http.patch<EmojiCreate>(`${environment.apiUrl}/emojis/createdEmojis`, emoji);
  }

  /**
   * This function allow you to check is the alias is already used
   * @param name a string
   * @returns true if the database contains an emoji with the alias, otherwise it returns false
   */
  isNameAlreadyUse = (id: string, name: string): Observable<Boolean> => {
    return this.http.get<Boolean>(`${environment.apiUrl}/emojis/nameAlreadyUse/${id}/${name}`);
  }

  /**
   * This function allows you to delete a emoji from database by passing his id
   * @param emojiId the id of the emoji you want to delete
   */
  deleteById = (emojiId: string) => {
    return this.http.delete<void>(`${environment.apiUrl}/emojis/createdEmoji/${emojiId}`);
  }

  // ================================================================================================
  // Process

  /** Set the emojis of the EmojiSelector (will be delayed if the service is still initializing) */
  register(selector: EmojisSelectorComponent) {
    if (this.json.length == 0)
      this.selectors.push(selector);
    else
      selector.emojis = this.json.slice(0, 200);
  }

  /** Process the emoji-text into html (will be delayed if the service is still initializing) */
  processEmojiSetter(content: string, teamId: string, setter: Function): void {
    const process = () => setter(this.processEmoji(content, teamId));
    if (this.json.length == 0)
      this.waiting.push(process);
    process();
  }

  // ================================================================================================
  // Smart

  /**
   * Returns the html representation (with img tag) of the given text
   * @param content The string to process
   * @param deep The number of folder deeper than /assets
   */
  private processEmoji = (content: string, teamId: string): string => {
    let html = ""; // return string
    let search = ":"; // TODO regex
    let first, second, prev = 0; // first ':', second ':', prev: current char index

    while ((first = this.utilsService.indexOf(content, search, prev)) != -1
      && (second = this.utilsService.indexOf(content, search, first + 1)) != -1) {
      html += content.substring(prev, first);

      let emoji = this.getEmoji(content.substring(first + 1, second), teamId);
      if (emoji == undefined) {// skip current ':' (move 1 forward)
        html += ":";
        prev = first + 1;
      } else {
        html += `<img class="inline_emoji" src="${environment.apiUrl}/files/${emoji.picture}" alt=":${emoji.name}:">`;
        prev = second + 1;
      }
    }

    // Add the remaining content
    return html + content.substring(prev);
  }

  /** Returns the matching emoji if it exits, undefined otherwise */
  private getEmoji(name: string, teamId = "orga"): EmojiNamePict {
    const emojis = [emojisOrga];

    let emoji;
    for (let index in emojis)
      if (emoji = emojis[index].find(emoji => emoji.annotation == name))
        return { id: undefined, name: name, picture: this.paths[index] + emoji.path };

    if (this.json.find(emoji => emoji.annotation == name))
      return { id: undefined, name: name, picture: "emojis/" + name };
    return undefined;
  }
}

// ================================================================================================
// TODO [Back]

/** Emojis added by the organization (available for all the teams) */
let emojisOrga = [
  {
    annotation: "m2i",
    path: "orga_1"
  },
  {
    annotation: "semifir",
    path: "orga_2"
  }
];
