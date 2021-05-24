import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { creationTeam } from '../models/creationTeam';
import { TeamLinkUser } from '../models/teamLinkUser';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  nextId: number = 10;

  // TODO [Remove]
  teams = [
    {
      id: 1,
      name: "IBM",
      desc: "ceci est la description de l equipe de IBM",
      picture: "1",
      salons: [1, 2, 3],
      users: [1, 2, 3, 4]
    },
    {
      id: 2,
      name: "Semifir",
      desc: "ceci est la description de l equipe de Semifir",
      picture: "4",
      salons: [1, 2, 3],
      users: [1, 2, 3, 4]
    }
  ];

  // TODO [back]
  _teams: { [id: number]: { id: number, name: string, desc: string, picture: string, salons: number[], users: number[] } } =
    {
      1: {
        id: 1,
        name: "IBM",
        desc: "International Business Machines Corporation",
        picture: "1.png",
        salons: [1, 2, 3],
        users: [1, 2, 10, 20]
      },
      2: {
        id: 2,
        name: "IDP",
        desc: "Invest in Digital People",
        picture: "2.jpg",
        salons: [10],
        users: [1, 2]
      },
      3: {
        id: 3,
        name: "M2i",
        desc: "M2i formations, Hauts-de-France",
        picture: "3.png",
        salons: [20],
        users: [10, 20]
      },
      10: {
        id: 10,
        name: "Semifir",
        desc: "Ceci est la description de l'équipe Semifir",
        picture: "4.png",
        salons: [30, 31, 32],
        users: [10, 20, 2, 1]
      }
    };

  constructor() { }

  /*
    This function allows us to link a user to a team. It return -1 if the user does not exist in the base,
    else it return 0 if its ok !
    idTeam: the id of the team you want to linked
    idUser: the id of the user you want to linked
  */
  saveLink = (idTeam: number, idUser: number): number => {
    let res = -1;
    this.teams.forEach(team => {
      if (team.id == idTeam) {
        team.users.push(idUser);
        res = 0;
      }
    });
    return res;
  }

  /*
    This function return a quick presentation of each team. It contain name, picture and the id
    return : an array of TeamLinkUser object
  */
  findAllPresentation = (): TeamLinkUser[] => {
    let res: TeamLinkUser[] = [];
    this.teams.forEach(team => {
      let data = new TeamLinkUser(team.id, team.name, team.picture);
      res.push(data);
    });
    return res;
  }

  /*
    this function allows us to save a team. It return a number wich is the id of the team created
    Param: A creationTeam object (name, desc and picture)
    Return: A number which is the id of the team created
  */
  save = (team: creationTeam): number => {
    let data = {
      id: this.nextId++,
      name: team.name,
      desc: team.desc,
      picture: team.picture,
      salons: [],
      users: []
    };
    this.teams.push(data);
    return data.id;
  }

  afficheEquipes = (id: number): TeamLinkUser[] => {
    let res = [];
    res.push(new TeamLinkUser(1, "IBM", "1.png"))
    res.push(new TeamLinkUser(1, "IDP", "2.jpg"))
    res.push(new TeamLinkUser(1, "M2i", "3.png"))
    res.push(new TeamLinkUser(1, "Semifir", "4.png"))
    return res;
  }

  /** Returns the name and the picture of the given team */
  findNamePictureById = (teamId: number): Observable<TeamLinkUser> => {
    return new Observable<TeamLinkUser>(obs => {
      obs.next(this.generateTeamNamePicture(teamId));
      obs.complete();
    });
  }

  // ================================================================================================
  // TODO [back]

  generateTeamNamePicture = (teamId: number): TeamLinkUser => {
    if (teamId in this._teams)
      return new TeamLinkUser(this._teams[teamId].id, this._teams[teamId].name, this._teams[teamId].picture);
    console.log("teamId", teamId);
    return undefined;
  }
}
