
import { Injectable } from '@angular/core';
import { creationTeam } from '../models/creationTeam';
import { TeamLinkUser } from '../models/teamLinkUser';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  count: number = 10;

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
  ]

  constructor() { }

  /**
   * This function allows us to link a user to a team.
   * @param idTeam the id of the team you want to linked
   * @param idUser the id of the user you want to linked
   * @returns It return -1 if the team does not exist in the base, else it return 0 if its ok !
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

  /**
   * This function return a quick presentation of each team. It contain name, picture and the id
   * @returns an array of TeamLinkUser object
   */
  findAllPresentation = (): TeamLinkUser[] => {
    let res: TeamLinkUser[] = [];
    this.teams.forEach(team => {
      let data = new TeamLinkUser(team.id, team.name, team.picture);
      res.push(data);
    });
    return res;
  }

  /**
   * This function allows us to save a team
   * @param team A creationTeam object (name, desc and picture)
   * @returns A number which is the id of the team created
   */
  save = (team: creationTeam): number => {
    let data = {
      id: this.count++,
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
}


