import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreatedEmoji } from '../models/emoji/createdEmoji';
import { EmojiNamePict } from '../models/emoji/emojiNamePict';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  /** path to the folder of the emojis [default, organization, team] */
  static path = ["emojis/", "_remove/emojis/", "_remove/emojis_teams/"];

  constructor(private http: HttpClient) { }

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
    return this.http.delete<void>(`${environment.apiUrl}/emojis/${emojiId}`);
  }

  // ================================================================================================
  // Smart

  /**
   * Returns the html representation (with img tag) of the given text
   * @param content The string to process
   * @param deep The number of folder deeper than /assets
   */
  static processEmoji = (content: string, deep: number, teamId: string): string => {
    let html = ""; // return string
    let search = ":"; // TODO regex
    let first = 0, second = 0, prev = 0; // first ':', second ':', prev: current char index

    while ((first = EmojiService.indexOf(content, search, prev)) != -1
      && (second = EmojiService.indexOf(content, search, first + 1)) != -1) {
      html += content.substring(prev, first);

      let emoji = EmojiService.getEmoji(content.substring(first + 1, second), teamId);
      if (emoji == undefined) {// skip current ':' (move 1 forward)
        html += ":";
        prev = first + 1;
      } else {
        html += `<img class="inline_emoji" src="${"../".repeat(deep)}assets/images/${emoji.picture}" alt=":${emoji.name}:">`;
        prev = second + 1;
      }
    }

    // Add the remaining content
    return html + content.substring(prev);
  }

  /** Returns the matching emoji if it exits, undefined otherwise */
  static getEmoji = (name: string, teamId = "orga"): EmojiNamePict => {
    let _emojis = [emojisBase, emojisOrga/*, emojisTeam[teamId]*/];

    for (let index in _emojis) {
      // TODO [Opti] -> search in dict
      let emojis = Object.values(_emojis[index]).filter(emoji => emoji.name == name);
      if (emojis.length != 0)
        return new EmojiNamePict("" + emojis[0].id, emojis[0].name, EmojiService.path[index] + emojis[0].picture);
    }
    return undefined;
  }

  /** Returns the name if it exits, undefined otherwise */
  static getEmojiName = (emojiId: number): string => {
    let _emojis = [emojisBase, emojisOrga, ...Object.values(emojisTeam)];

    for (let index in _emojis) {
      // TODO [Opti] -> search in dict
      let emoji = Object.values(_emojis[index]).find(elem => elem.id == emojiId);
      if (emoji != undefined)
        return emoji.name;
    }
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
// TODO [back]

/** Emojis added in each team */
let emojisTeam: { [id: number]: { [id: number]: { id: number, name: string, picture: string } } } = {
  "-1": {},// If no teamId given
  1: {
    100_001: {
      id: 100_001,
      name: "bob",
      picture: "1/aa.png"
    },
    100_002: {
      id: 100_002,
      name: "rl",
      picture: "1/ab.png"
    },
    100_003: {
      id: 100_003,
      name: "ibm",
      picture: "1/ac.png"
    },
  },
  2: {
    100_101: {
      id: 100_101,
      name: "pe",
      picture: "2/ba.png"
    },
  },
  3: {
    100_201: {
      id: 100_201,
      name: "nike",
      picture: "3/ca.png"
    },
  },
  10: {
    100_301: {
      id: 100_301,
      name: "bmw",
      picture: "10/da.png"
    },
  }
};

// ================================================================================================

/** Emojis added by the organization (available for all the teams) */
let emojisOrga: { [id: number]: { id: number, name: string, picture: string } } = {
  10_001: {
    id: 10_001,
    name: "m2i",
    picture: "1.png"
  },
  10_002: {
    id: 10_002,
    name: "semifir",
    picture: "2.png"
  },
};

// ================================================================================================

/** Default emojis */
let emojisBase: { [id: number]: { id: number, name: string, picture: string } } = {
  1: {
    id: 1,
    name: "bagel",
    picture: "bagel.png"
  },
  2: {
    id: 2,
    name: "beer_mug",
    picture: "beer_mug.png"
  },
  3: {
    id: 3,
    name: "beverage_box",
    picture: "beverage_box.png"
  },
  4: {
    id: 4,
    name: "birthday_cake",
    picture: "birthday_cake.png"
  },
  5: {
    id: 5,
    name: "broccoli",
    picture: "broccoli.png"
  },
  6: {
    id: 6,
    name: "bubble_tea",
    picture: "bubble_tea.png"
  },
  7: {
    id: 7,
    name: "burrito",
    picture: "burrito.png"
  },
  8: {
    id: 8,
    name: "cherries",
    picture: "cherries.png"
  },
  9: {
    id: 9,
    name: "chocolate_bar",
    picture: "chocolate_bar.png"
  },
  10: {
    id: 10,
    name: "clinking_beer_mugs",
    picture: "clinking_beer_mugs.png"
  },
  11: {
    id: 11,
    name: "cocktail_glass",
    picture: "cocktail_glass.png"
  },
  12: {
    id: 12,
    name: "cookie",
    picture: "cookie.png"
  },
  13: {
    id: 13,
    name: "croissant",
    picture: "croissant.png"
  },
  14: {
    id: 14,
    name: "cut_of_meat",
    picture: "cut_of_meat.png"
  },
  15: {
    id: 15,
    name: "fire",
    picture: "fire.png"
  },
  16: {
    id: 16,
    name: "flexed_biceps",
    picture: "flexed_biceps.png"
  },
  17: {
    id: 17,
    name: "french_fries",
    picture: "french_fries.png"
  },
  18: {
    id: 18,
    name: "frowning_face",
    picture: "frowning_face.png"
  },
  19: {
    id: 19,
    name: "frowning_face_with_open_mouth",
    picture: "frowning_face_with_open_mouth.png"
  },
  20: {
    id: 20,
    name: "grimacing_face",
    picture: "grimacing_face.png"
  },
  21: {
    id: 21,
    name: "grinning_face_with_smiling_eyes",
    picture: "grinning_face_with_smiling_eyes.png"
  },
  22: {
    id: 22,
    name: "grinning_face_with_sweat",
    picture: "grinning_face_with_sweat.png"
  },
  23: {
    id: 23,
    name: "hamburger",
    picture: "hamburger.png"
  },
  24: {
    id: 24,
    name: "hundred_points",
    picture: "hundred_points.png"
  },
  25: {
    id: 25,
    name: "microbe",
    picture: "microbe.png"
  },
  26: {
    id: 26,
    name: "middle_finger",
    picture: "middle_finger.png"
  },
  27: {
    id: 27,
    name: "OK_hand",
    picture: "OK_hand.png"
  },
  28: {
    id: 28,
    name: "pineapple",
    picture: "pineapple.png"
  },
  29: {
    id: 29,
    name: "pizza",
    picture: "pizza.png"
  },
  30: {
    id: 30,
    name: "red_apple",
    picture: "red_apple.png"
  },
  31: {
    id: 31,
    name: "sandwich",
    picture: "sandwich.png"
  },
  32: {
    id: 32,
    name: "shamrock",
    picture: "shamrock.png"
  },
  33: {
    id: 33,
    name: "sleeping_face",
    picture: "sleeping_face.png"
  },
  34: {
    id: 34,
    name: "slot_machine",
    picture: "slot_machine.png"
  },
  35: {
    id: 35,
    name: "smiling_face_with_halo",
    picture: "smiling_face_with_halo.png"
  },
  36: {
    id: 36,
    name: "spaghetti",
    picture: "spaghetti.png"
  },
  37: {
    id: 37,
    name: "stop_sign",
    picture: "stop_sign.png"
  },
  38: {
    id: 38,
    name: "tangerine",
    picture: "tangerine.png"
  },
  39: {
    id: 39,
    name: "tomato",
    picture: "tomato.png"
  },
  40: {
    id: 40,
    name: "tropical_drink",
    picture: "tropical_drink.png"
  },
  41: {
    id: 41,
    name: "upside-down_face",
    picture: "upside-down_face.png"
  },
  42: {
    id: 42,
    name: "victory_hand",
    picture: "victory_hand.png"
  },
  43: {
    id: 43,
    name: "vulcan_salute",
    picture: "vulcan_salute.png"
  },
  44: {
    id: 44,
    name: "watermelon",
    picture: "watermelon.png"
  },
  45: {
    id: 45,
    name: "wine_glass",
    picture: "wine_glass.png"
  },
  46: {
    id: 46,
    name: "zipper-mouth_face",
    picture: "zipper-mouth_face.png"
  }
};
