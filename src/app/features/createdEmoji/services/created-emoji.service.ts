import { Injectable } from '@angular/core';
import { UserNamePict } from 'src/app/models/userNamePict';
import { UserService } from 'src/app/services/user.service';
import { CreatedEmoji } from '../models/createdEmoji';

@Injectable({
  providedIn: 'root'
})
export class CreatedEmojiService {



  constructor() { }

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
    Object.values(createdEmojis).map(element => res.push(CreatedEmojiService.generateCreatedEmoji(element.id)));
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

};
