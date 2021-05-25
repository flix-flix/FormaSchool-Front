import { Injectable } from '@angular/core';
import { userCreation } from '../models/userCreation';
import { UserNamePict } from '../models/userNamePict';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  nextId = 10;

  // TODO [Remove]
  users = [
    {
      id: 1,
      firstname: "Alex",
      lastname: "Dupont",
      password: "tintin",
      email: "alexdupont@gmail.com",
      picture: "picture of a cat",
      create: new Date("2019-01-16"),
      teams: [1, 2]
    },
    {
      id: 2,
      firstname: "Jason",
      lastname: "Vennin",
      password: "toto",
      email: "totogfkgkf",
      picture: "picture of a dog",
      create: new Date("2020-01-16"),
      teams: [1]
    }
  ]

  constructor() { }

  /**
   * This function return a quick presentation of each user. It contain lastname, firstname, id and picture
   * @returns an array of UserLinkTeam object
   */
  findAllPresentation = (): UserNamePict[] => {
    let res: UserNamePict[] = [];
    this.users.forEach(user => {
      let data = new UserNamePict(user.id, user.firstname, user.lastname, user.picture);
      res.push(data);
    });
    return res;
  }

  /**
   * This function return a quick presentation of each user which arent in the team refered by the id.
   * @param id the id of the team
   * @returns a list of UserLinkTeam which dont have the team
   */
  listUserLinkTeam = (id: number): UserNamePict[] => {
    return this.users
      .filter(user => !user.teams.includes(id))
      .map(userDetail => new UserNamePict(
        userDetail.id,
        userDetail.firstname,
        userDetail.lastname,
        userDetail.picture)
      );
  }

  /**
   * This function allows us to link a team to a user
   * @param idTeam the id of the team you want to linked
   * @param idUser the id of the user you want to linked
   * @returns It return -1 if the user does not exist in the base, else it return 0 if its ok !
   */
  saveLink = (idTeam: number, idUser: number): number => {
    let res = -1;
    this.users.forEach(user => {
      if (user.id == idUser) {
        user.teams.push(idTeam);
        res = 0;
      }
    });
    return res;
  }

  /**
   * This function allows us to save a user
   * @param user A creationUser object (firstname, lastname, password, email and picture)
   * @returns A number which is the id of the user created
   */
  save = (user: userCreation): number => {
    let data = {
      id: this.nextId++,
      firstname: user.firstname,
      lastname: user.lastname,
      password: user.password,
      email: user.password,
      picture: user.picture,
      create: new Date(),
      teams: []
    }
    this.users.push(data);
    return data.id;
  }

  // ================================================================================================
  // TODO [back]

  static generateUserNamePicture = (userId: number): UserNamePict => {
    if (!(userId in _users)) {
      console.error("userId doesn't exist:", userId);
      return undefined;
    }
    return new UserNamePict(_users[userId].id, _users[userId].firstname, _users[userId].lastname, _users[userId].picture);
  }
}

// TODO [back]
let _users: {
  [id: number]: { id: number, firstname: string, lastname: string, password: string, email: string, picture: string, create: Date, teams: number[] }
} = {
  1: {
    id: 1,
    firstname: "Félix",
    lastname: "Burie",
    password: "tintin",
    email: "felix@gmail.com",
    picture: "0.jpg",
    create: new Date("2019-01-16"),
    teams: [1, 2, 10]
  },
  2: {
    id: 2,
    firstname: "Jason",
    lastname: "Vennin",
    password: "toto",
    email: "jason@gmail.com",
    picture: "1.jpg",
    create: new Date("2020-01-16"),
    teams: [1, 2, 10]
  },
  10: {
    id: 3,
    firstname: "Luca",
    lastname: "Novelli",
    password: "lulu",
    email: "luca@orange.fr",
    picture: "2.jpg",
    create: new Date("2020-03-07"),
    teams: [1, 3, 10]
  },
  20: {
    id: 4,
    firstname: "Bouchaib",
    lastname: "Faham",
    password: "bobo",
    email: "bouchaib@sfr.fr",
    picture: "3.jpg",
    create: new Date("2020-02-22"),
    teams: [1, 3, 10]
  },
}
