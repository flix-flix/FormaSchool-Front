import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmojiNamePict } from '../features/messages/models/emojiNamePict';
import { CreatedEmoji } from '../models/createdEmoji';
import { UserNamePict } from '../models/userNamePict';
import { UserService } from './user.service';

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
  static processEmoji = (content: string, deep: number): string => {
    let html = ""; // return string
    let search = ":"; // TODO regex
    let first = 0, second = 0, prev = 0; // first ':', second ':', prev: current char index
    let name; // name of the potential emoji

    while ((first = EmojiService.indexOf(content, search, prev)) != -1
      && (second = EmojiService.indexOf(content, search, first + 1)) != -1) {
      name = content.substring(first + 1, second);
      html += EmojiService.inSpan(content.substring(prev, first));

      let _emojis = Object.values(emojis).filter(elem => elem.name == name);
      if (_emojis.length != 0) {
        let emoji = _emojis[0];
        html += `<img class="inline_emoji" src="${"../".repeat(deep)}assets/images/_remove/${emoji.picture}" alt=":${emoji.name}:">`;
        prev = second + 1;
      } else {
        html += ":";
        prev = first + 1;
      }
    }

    // Add the remaining content
    return html + EmojiService.inSpan(content.substring(prev));
  }

  // TODO Usefull ?
  /** Returns the text within a span._text */
  static inSpan = (content: string): string => {
    return `<span class="_text">${content}</span>`
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
    for (let emojiId in emojis)
      _emojis.push(EmojiService.generateEmojiNamePicture(+emojiId));
    return _emojis;
  }

  static generateEmojiNamePicture = (emojiId: number): EmojiNamePict => {
    if (!(emojiId in emojis)) {
      console.error("emojiId doesn't exist:", emojiId);
      return undefined;
    }
    return new EmojiNamePict(emojis[emojiId].id, emojis[emojiId].name, emojis[emojiId].picture);
  }

  //========================================= Emoji Created ======================================

  /**
   * this function give you an EmojiCreated object by the id 
   * @param emojiId the id fo the emoji you re looking for
   * @returns a CreatedEmoji object 
   */
  static generateCreatedEmoji = (emojiId: number): CreatedEmoji => {
    if (!(emojiId in createdEmojis)) {
      console.error("roleId doesn't exist:", emojiId);
      return undefined;
    }
    return new CreatedEmoji(emojiId, createdEmojis[emojiId].name, createdEmojis[emojiId].picture, createdEmojis[emojiId].user);
  }

  /**
   * This function return you all element on type CreatedEmoji
   * @returns a list of CreatedEmoji which contain all element
   */
  findAllCreatedEmoji = (): CreatedEmoji[] => {
    let res: CreatedEmoji[] = [];
    Object.values(createdEmojis).map(element => res.push(EmojiService.generateCreatedEmoji(element.id)));
    return res;
  }

  /**
   * This function allows you to add a emoji
   * @param emoji a Created emoji that you want to add 
   * @returns the id created 
   */
  addEmoji = (emoji: CreatedEmoji): number => {
    createdEmojis[nextId] = {
      id: nextId,
      name: emoji.name,
      picture: emoji.picture,
      user: emoji.user
    }
    return nextId++;
  }

  /**
   * This function allow you to check is the alias is already used
   * @param name a string
   * @returns true if the database contains an emoji with the alias, otherwise it returns false
   */
  isNameAlreadyUse = (name: string): boolean => {
    return Object.values(createdEmojis).filter(element => element.name == name).length != 0;
  }

  /**
   * This function allows you to delete a emoji from database by passing his id
   * @param emojiId the id of the emoji you want to delete
   */
  deleteById = (emojiId: number) => {
    delete createdEmojis[emojiId];
  }
}
let nextId = 10;
let createdEmojis: { [id: number]: { id: number, name: string, picture: string, user: UserNamePict } } =
{
  1: {
    id: 1,
    name: "bmw",
    picture: "0",
    user: UserService.generateUserNamePicture(2)
  },
  2: {
    id: 2,
    name: "nike",
    picture: "1",
    user: UserService.generateUserNamePicture(2)
  },
  3: {
    id: 3,
    name: "insta",
    picture: "2",
    user: UserService.generateUserNamePicture(2)
  },
  4: {
    id: 4,
    name: "rocket",
    picture: "3",
    user: UserService.generateUserNamePicture(2)
  },
  5: {
    id: 5,
    name: "bob",
    picture: "4",
    user: UserService.generateUserNamePicture(2)
  },
  6: {
    id: 6,
    name: "boby",
    picture: "4",
    user: UserService.generateUserNamePicture(2)
  },
  7: {
    id: 7,
    name: "bobu",
    picture: "4",
    user: UserService.generateUserNamePicture(2)
  }
}
let emojis: { [id: number]: { id: number, name: string, picture: string } } = {
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
