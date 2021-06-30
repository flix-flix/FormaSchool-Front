import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmojisSelectorComponent } from '../components/messages/emojis-selector/emojis-selector.component';
import { CreatedEmoji } from '../models/emoji/createdEmoji';
import { EmojiDesc } from '../models/emoji/emojiDesc';
import { EmojiNamePict } from '../models/emoji/emojiNamePict';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {
  url = environment.apiUrl + "/emojis/";

  /** path to the folder of the emojis [team, organization, default] */
  static paths = [/*"emojisTeams/",*/ "emojisOrga/", "emojis/"];

  static _json: EmojiDesc[] = [];

  json: EmojiDesc[] = [];
  nextEmojiId = 1_000_000; // give id to the emoji without id
  selectors: EmojisSelectorComponent[] = [];

  constructor(private http: HttpClient) {
    this.http.get<any[]>(this.url + "json").subscribe(json => {
      json.forEach(item => item.order = (item.order == "" ? this.nextEmojiId++ : item.order));

      this.json = <EmojiDesc[]>json;
      this.json.sort((a, b) => a.order - b.order);
      this.json.forEach(item => item.annotation = item.annotation.substr(0, item.annotation.length - 2));
      this.json = this.json.filter(item => !item.annotation.includes("skin"))
      EmojiService._json = this.json;

      this.selectors.forEach(select => select.emojis = this.json.slice(0, 50));
    });
  }

  //========================================= Emoji Created ======================================

  findCreatedEmojiByTeamId = (teamId: string): Observable<CreatedEmoji[]> => {
    return this.http.get<CreatedEmoji[]>(`${environment.apiUrl}/emojis/createdEmojis/${teamId}`);
  }

  findCreatedEmojiOrga = (): Observable<CreatedEmoji[]> => {
    return this.http.get<CreatedEmoji[]>(`${environment.apiUrl}/emojis/createdEmojisOrga`);
  }

  /**
   * This function allows you to add a emoji
   * @param emoji the CreatedEmoji you want to add 
   * @returns the emoji created 
   */
  addEmoji = (emoji: CreatedEmoji): Observable<CreatedEmoji> => {
    return this.http.post<CreatedEmoji>(`${environment.apiUrl}/emojis/createdEmojis`, emoji.toJSON());
  }

  /**
   * This function allws you to update the emoji
   * @param emoji a Created Emoji that you want to update
   */
  updateCreatedEmoji = (emoji: CreatedEmoji): Observable<CreatedEmoji> => {
    return this.http.patch<CreatedEmoji>(`${environment.apiUrl}/emojis/createdEmojis`, emoji);
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

  register(selector: EmojisSelectorComponent) {
    if (this.json.length == 0)
      this.selectors.push(selector);
    else
      selector.emojis = this.json.slice(0, 200);
  }

  // ================================================================================================
  // Smart

  /**
   * Returns the html representation (with img tag) of the given text
   * @param content The string to process
   * @param deep The number of folder deeper than /assets
   */
  static processEmoji = (content: string, teamId: string): string => {
    let html = ""; // return string
    let search = ":"; // TODO regex
    let first, second, prev = 0; // first ':', second ':', prev: current char index

    while ((first = EmojiService.indexOf(content, search, prev)) != -1
      && (second = EmojiService.indexOf(content, search, first + 1)) != -1) {
      html += content.substring(prev, first);

      let emoji = EmojiService.getEmoji(content.substring(first + 1, second), teamId);
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
  static getEmoji(name: string, teamId = "orga"): EmojiNamePict {
    const emojis = [emojisOrga];

    let emoji;
    for (let index in emojis)
      if (emoji = emojis[index].find(emoji => emoji.annotation == name))
        return { id: undefined, name: name, picture: this.paths[index] + emoji.path };

    if (EmojiService._json.find(emoji => emoji.annotation == name))
      return { id: undefined, name: name, picture: "emojis/" + name };
    return undefined;
  }

  // ================================================================================================
  // TODO [Utils]

  /** indexOf (string and regex) */
  static indexOf = (text: string, search: string | RegExp, start: number) => {
    if (typeof search === "string")
      return text.indexOf(<string>search, start); // string
    let index = text.slice(start).search(search); // regex
    return index < 0 ? index : index + start; // return -1
  }
}

// ================================================================================================

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
