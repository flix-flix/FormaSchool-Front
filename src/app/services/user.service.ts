
import { Injectable } from '@angular/core';
import { creationUser } from '../models/creationUser';
import { UserLinkTeam } from '../models/userLinkTeam';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  count = 10;
  users = [
    {
      id: 1,
      firstname: "Alex",
      lastname: "Dupont",
      password: "tintin",
      email: "alexdupont@gmail.com",
      picture: "picture of a cat",
      create: new Date("2019-01-16"),
      teams:[1,2]
    },
    {
      id: 2,
      firstname: "Jason",
      lastname: "Vennin",
      password: "toto",
      email: "totogfkgkf",
      picture: "picture of a dog",
      create: new Date("2020-01-16"),
      teams:[1]
    }
  ]

  constructor() { }

  /*
    This function return a quick presentation of each user. It contain lastname, firstname, id and picture
    return : an array of UserLinkTeam object
  */
  findAllPresentation = () : UserLinkTeam[] => {
    let res: UserLinkTeam[] = [];
    this.users.forEach(user => {
      let data = new UserLinkTeam(user.id,user.firstname, user.lastname, user.picture);
      res.push(data);
    });
    return res;
  }

  /*
    This function allows us to link a team to a user. It return -1 if the user does not exist in the base,
    else it return 0 if its ok !
    idTeam: the id of the team you want to linked
    idUser: the id of the user you want to linked
  */
  saveLink = (idTeam:number, idUser:number):number => {
    let res = -1;
    this.users.forEach(user => {
      if(user.id == idUser){
        user.teams.push(idTeam);
        res = 0;
      }
    });
    return res;
  }

  /*
    this function allows us to save a user. It return a number wich is the id of the user created
    Param: A creationUser object (firstname, lastname, password, email and picture)
    Return: A number which is the id of the user created
  */
  save = (user:creationUser) : number => {
    let data = {
      id: this.count++,
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
}
