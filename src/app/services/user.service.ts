import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user/user';
import { UserConnect } from '../models/user/userConnect';
import { userCreation } from '../models/user/userCreation';
import { USerLocalStorage } from '../models/user/userLocalStorage';
import { UserNamePict } from '../models/user/userNamePict';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  nextId = 11;

  constructor(private http: HttpClient) { }

  // ================================================================================================

  findNamePictById = (userId: string): Observable<UserNamePict> => {
    return this.http.get<UserNamePict>(environment.apiUrl + "/users/namePict/" + userId);
  }

  findSettingsById = (userId: string): Observable<UserNamePict> => {
    return this.http.get<UserNamePict>(environment.apiUrl + "/users/userSettings/" + userId);
  }

  // TODO [Remove]
  findNamePictDefault = (): Observable<UserNamePict> => {
    return this.http.get<UserNamePict>(environment.apiUrl + "/users/default");
  }

  connect = (user: UserConnect): Observable<USerLocalStorage> => {
    return this.http.post<USerLocalStorage>(environment.apiUrl + "/users/connect", user);
  }

  // ================================================================================================

  /**
   * This function return a quick presentation of each user. It contain lastname, firstname, id and picture
   * @returns an array of UserLinkTeam object
   */
  findAllPresentation = (): Observable<UserNamePict[]> => {
    let res: UserNamePict[] = [];
    Object.values(users).forEach(user => {
      let data = new UserNamePict("" + user.id, user.firstname, user.lastname, user.picture);
      res.push(data);
    });
    return new Observable<UserNamePict[]>(obs => {
      obs.next(res);
      obs.complete();
    });
  }


  /**
   * This function return a quick presentation of each user which arent in the team refered by the id.
   * @param id the id of the team
   * @returns a list of UserLinkTeam which dont have the team
   */
  userNotInTheTeam = (teamId: string): Observable<UserNamePict[]> => {
    return this.http.get<UserNamePict[]>(`${environment.apiUrl}/users/userNotInTheTeam/${teamId}`);
  }

  /**
   * This function allows us to link a team to a user
   * @param idTeam the id of the team you want to linked
   * @param idUser the id of the user you want to linked
   * @returns It return -1 if the user does not exist in the base, else it return 0 if its ok !
   */
  saveLink = (idTeam: number, idUser: number): Observable<number> => {
    let res = -1;
    Object.values(users).forEach(user => {
      if (user.id == idUser) {
        user.teams.push(idTeam);
        res = 0;
      }
    });
    return new Observable<number>(obs => {
      obs.next(res);
      obs.complete();
    });
  }

  /**
   * This function allows us to save a user
   * @param user A creationUser object (firstname, lastname, password, email and picture)
   * @returns A user 
   */
  save = (user: userCreation): Observable<User> => {
    return this.http.post<User>(`${environment.apiUrl}/users/add`, user);
  }

  // ================================================================================================
  // TODO [back]


  static generateUserNamePicture = (userId: number): UserNamePict => {
    if (!(userId in users)) {
      console.error("userId doesn't exist:", userId);
      return undefined;
    }
    return new UserNamePict("" + users[userId].id, users[userId].firstname, users[userId].lastname, users[userId].picture);
  }
}

// TODO [back]
let users: {
  [id: number]: { id: number, firstname: string, lastname: string, password: string, email: string, picture: string, create: Date, teams: number[], roles: number[] }
} = {
  1: {
    id: 1,
    firstname: "Félix",
    lastname: "Burie",
    password: "tintin",
    email: "felix@gmail.com",
    picture: "1.jpg",
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
    picture: "2.jpg",
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
    picture: "3.jpg",
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
    picture: "4.jpg",
    create: new Date("2020-02-22"),
    teams: [1, 3, 10],
    roles: [2, 3]
  },
}
