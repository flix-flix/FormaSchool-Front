import { Injectable } from '@angular/core';
import { Members } from '../models/members';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor() { }

  /**
    * This function return a presentation of each user. It contain lastname, firstname, id and role
    * @returns an array ofobject
    */
  findAllUserRoles = (): Members[] => {
    let result: Members[] = [];
    Object.values(_users).forEach(user => {
      result.push(UserService.generateUserWithRole(user.id));
    });
    return result;
  }
  // TODO [back]
  generateUserWithRole = (userId): Members => {
    if (!(userId in _users)) {
      console.error("userId doesn't exist:", userId);
      return undefined;
    }
    return new Members(_users[userId].id, _users[userId].lastname, _users[userId].firstname, _users[userId].roles);
  }
}
let _users: {
  [id: number]: { id: number, firstname: string, lastname: string, password: string, email: string, picture: string, create: Date, teams: number[], roles: number[] }
} = {
  1: {
    id: 1,
    firstname: "Félix",
    lastname: "Burie",
    password: "tintin",
    email: "felix@gmail.com",
    picture: "0.jpg",
    create: new Date("2019-01-16"),
    teams: [1, 2, 10],
    roles: [1]
  },
  2: {
    id: 2,
    firstname: "Jason",
    lastname: "Vennin",
    password: "toto",
    email: "jason@gmail.com",
    picture: "1.jpg",
    create: new Date("2020-01-16"),
    teams: [1, 2, 10],
    roles: [1, 2]
  },
  10: {
    id: 10,
    firstname: "Luca",
    lastname: "Novelli",
    password: "lulu",
    email: "luca@orange.fr",
    picture: "2.jpg",
    create: new Date("2020-03-07"),
    teams: [1, 3, 10],
    roles: [3]
  },
  20: {
    id: 20,
    firstname: "Bouchaib",
    lastname: "Faham",
    password: "bobo",
    email: "bouchaib@sfr.fr",
    picture: "3.jpg",
    create: new Date("2020-02-22"),
    teams: [1, 3, 10],
    roles: [2, 3]
  },
}


