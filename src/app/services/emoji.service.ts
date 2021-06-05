import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmojiNamePict } from '../features/messages/models/emojiNamePict';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  constructor() { }

  static findAllNamePict = (): Observable<EmojiNamePict[]> => {
    return new Observable<EmojiNamePict[]>(obs => {
      obs.next(EmojiService.generateAllEmojiNamePicture());
      obs.complete();
    });
  }

  // ================================================================================================
  // Smart

  /**
   * Returns the html representation (with img tag) of the given text
   * @param content The string to process
   * @param deep The number of folder deeper than /assets
   */
  static processEmoji = (content: string, deep: number, teamId: number): string => {
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
        html += `<img class="inline_emoji" src="${"../".repeat(deep)}assets/images/_remove/${emoji.picture}" alt=":${emoji.name}:">`;
        prev = second + 1;
      }
    }

    // Add the remaining content
    return html + content.substring(prev);
  }

  /** Returns the matching emoji is it exits, undefined otherwise */
  static getEmoji = (name: string, teamId = -1): EmojiNamePict => {
    let _emojis = [emojisBase, emojisOrga, emojisTeam[teamId]];

    for (let index in _emojis) {
      // TODO [Opti] -> search in dict
      let emojis = Object.values(_emojis[index]).filter(elem => elem.name == name);
      if (emojis.length != 0)
        return new EmojiNamePict(emojis[0].id, emojis[0].name, emojis[0].picture);
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

  // ================================================================================================
  // TODO [back]

  static generateAllEmojiNamePicture = (): EmojiNamePict[] => {
    let _emojis = [];
    for (let emojiId in emojisBase)
      _emojis.push(EmojiService.generateEmojiNamePicture(+emojiId));
    return _emojis;
  }

  static generateEmojiNamePicture = (emojiId: number): EmojiNamePict => {
    if (!(emojiId in emojisBase)) {
      console.error("emojiId doesn't exist:", emojiId);
      return undefined;
    }
    return new EmojiNamePict(emojisBase[emojiId].id, emojisBase[emojiId].name, emojisBase[emojiId].picture);
  }
}

// ================================================================================================
// TODO [back]

let emojisTeam: { [id: number]: { [id: number]: { id: number, name: string, picture: string } } } = {
  "-1": {},
  1: {
    1: {
      id: 1,
      name: "bob",
      picture: "emojis/teams/1/aa.png"
    },
    2: {
      id: 1,
      name: "rl",
      picture: "emojis/teams/1/ab.png"
    },
  },
  2: {
    101: {
      id: 101,
      name: "pe",
      picture: "emojis/teams/2/ba.png"
    },
  },
  3: {
    201: {
      id: 201,
      name: "nike",
      picture: "emojis/teams/2/ca.png"
    },
  },
  10: {
    301: {
      id: 301,
      name: "bmw",
      picture: "emojis/teams/2/da.png"
    },
  }
};


// ================================================================================================

let emojisOrga: { [id: number]: { id: number, name: string, picture: string } } = {
  1: {
    id: 1,
    name: "m2i",
    picture: "emojis/organisation/1.png"
  },
  2: {
    id: 2,
    name: "semifir",
    picture: "emojis/organisation/2.png"
  },
};

// ================================================================================================

let emojisBase: { [id: number]: { id: number, name: string, picture: string } } = {
  1: {
    id: 1,
    name: "bagel",
    picture: "emojis/bagel.png"
  },
  2: {
    id: 2,
    name: "beer_mug",
    picture: "emojis/beer_mug.png"
  },
  3: {
    id: 3,
    name: "beverage_box",
    picture: "emojis/beverage_box.png"
  },
  4: {
    id: 4,
    name: "birthday_cake",
    picture: "emojis/birthday_cake.png"
  },
  5: {
    id: 5,
    name: "broccoli",
    picture: "emojis/broccoli.png"
  },
  6: {
    id: 6,
    name: "bubble_tea",
    picture: "emojis/bubble_tea.png"
  },
  7: {
    id: 7,
    name: "burrito",
    picture: "emojis/burrito.png"
  },
  8: {
    id: 8,
    name: "cherries",
    picture: "emojis/cherries.png"
  },
  9: {
    id: 9,
    name: "chocolate_bar",
    picture: "emojis/chocolate_bar.png"
  },
  10: {
    id: 10,
    name: "clinking_beer_mugs",
    picture: "emojis/clinking_beer_mugs.png"
  },
  11: {
    id: 11,
    name: "cocktail_glass",
    picture: "emojis/cocktail_glass.png"
  },
  12: {
    id: 12,
    name: "cookie",
    picture: "emojis/cookie.png"
  },
  13: {
    id: 13,
    name: "croissant",
    picture: "emojis/croissant.png"
  },
  14: {
    id: 14,
    name: "cut_of_meat",
    picture: "emojis/cut_of_meat.png"
  },
  15: {
    id: 15,
    name: "fire",
    picture: "emojis/fire.png"
  },
  16: {
    id: 16,
    name: "flexed_biceps",
    picture: "emojis/flexed_biceps.png"
  },
  17: {
    id: 17,
    name: "french_fries",
    picture: "emojis/french_fries.png"
  },
  18: {
    id: 18,
    name: "frowning_face",
    picture: "emojis/frowning_face.png"
  },
  19: {
    id: 19,
    name: "frowning_face_with_open_mouth",
    picture: "emojis/frowning_face_with_open_mouth.png"
  },
  20: {
    id: 20,
    name: "grimacing_face",
    picture: "emojis/grimacing_face.png"
  },
  21: {
    id: 21,
    name: "grinning_face_with_smiling_eyes",
    picture: "emojis/grinning_face_with_smiling_eyes.png"
  },
  22: {
    id: 22,
    name: "grinning_face_with_sweat",
    picture: "emojis/grinning_face_with_sweat.png"
  },
  23: {
    id: 23,
    name: "hamburger",
    picture: "emojis/hamburger.png"
  },
  24: {
    id: 24,
    name: "hundred_points",
    picture: "emojis/hundred_points.png"
  },
  25: {
    id: 25,
    name: "microbe",
    picture: "emojis/microbe.png"
  },
  26: {
    id: 26,
    name: "middle_finger",
    picture: "emojis/middle_finger.png"
  },
  27: {
    id: 27,
    name: "OK_hand",
    picture: "emojis/OK_hand.png"
  },
  28: {
    id: 28,
    name: "pineapple",
    picture: "emojis/pineapple.png"
  },
  29: {
    id: 29,
    name: "pizza",
    picture: "emojis/pizza.png"
  },
  30: {
    id: 30,
    name: "red_apple",
    picture: "emojis/red_apple.png"
  },
  31: {
    id: 31,
    name: "sandwich",
    picture: "emojis/sandwich.png"
  },
  32: {
    id: 32,
    name: "shamrock",
    picture: "emojis/shamrock.png"
  },
  33: {
    id: 33,
    name: "sleeping_face",
    picture: "emojis/sleeping_face.png"
  },
  34: {
    id: 34,
    name: "slot_machine",
    picture: "emojis/slot_machine.png"
  },
  35: {
    id: 35,
    name: "smiling_face_with_halo",
    picture: "emojis/smiling_face_with_halo.png"
  },
  36: {
    id: 36,
    name: "spaghetti",
    picture: "emojis/spaghetti.png"
  },
  37: {
    id: 37,
    name: "stop_sign",
    picture: "emojis/stop_sign.png"
  },
  38: {
    id: 38,
    name: "tangerine",
    picture: "emojis/tangerine.png"
  },
  39: {
    id: 39,
    name: "tomato",
    picture: "emojis/tomato.png"
  },
  40: {
    id: 40,
    name: "tropical_drink",
    picture: "emojis/tropical_drink.png"
  },
  41: {
    id: 41,
    name: "upside-down_face",
    picture: "emojis/upside-down_face.png"
  },
  42: {
    id: 42,
    name: "victory_hand",
    picture: "emojis/victory_hand.png"
  },
  43: {
    id: 43,
    name: "vulcan_salute",
    picture: "emojis/vulcan_salute.png"
  },
  44: {
    id: 44,
    name: "watermelon",
    picture: "emojis/watermelon.png"
  },
  45: {
    id: 45,
    name: "wine_glass",
    picture: "emojis/wine_glass.png"
  },
  46: {
    id: 46,
    name: "zipper-mouth_face",
    picture: "emojis/zipper-mouth_face.png"
  }
};
