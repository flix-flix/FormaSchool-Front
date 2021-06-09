import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamNamePict } from '../models/teamNamePict';
import { SalonService } from '../features/team/services/salon.service';
import { Member } from '../models/member';
import { TeamNameDescPict } from '../models/teamNameDescPict';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  nextId: number = 11;

  constructor() { }

  /**
   * This function allows us to link a user to a team.
   * @param idTeam the id of the team you want to linked
   * @param idUser the id of the user you want to linked
   * @returns It return -1 if the team does not exist in the base, else it return 0 if its ok !
   */
  saveLink = (idTeam: number, idUser: number): Observable<number> => {
    let res = -1;
    Object.values(teams).forEach(team => {
      if (team.id == idTeam) {
        team.users.push(idUser);
        res = 0;
      }
    });
    return new Observable<number>(obs => {
      obs.next(res);
      obs.complete();
    });
  }
  /**
   * This function help for updating a team with a small presentation
   * @returns a update team*/

  updateTeam = (teamUpdate: TeamNameDescPict) => {
    return new Observable<TeamNameDescPict>(obs => {
      obs.next(new TeamNameDescPict(" ", " ", " ",));
      obs.complete();
    });

  }

  /** Returns the name and the picture for the given team */
  findNamePictureById = (teamId: number): Observable<TeamNamePict> => {
    return new Observable<TeamNamePict>(obs => {
      obs.next(TeamService.generateTeamNamePicture(teamId));
      obs.complete();
    });
  }




  /**
   * This function return a quick presentation of each team. It contain name, picture and the id
   * @returns an array of TeamLinkUser object
   */
  findAllPresentation = (): Observable<TeamNamePict[]> => {
    let res: TeamNamePict[] = [];
    Object.values(teams).forEach(team => {
      let data = new TeamNamePict(team.id, team.name, team.picture);
      res.push(data);
    });
    return new Observable<TeamNamePict[]>(obs => {
      obs.next(res);
      obs.complete();
    });
  }

  /**
   * This function allows us to save a team
   * @param team A creationTeam object (name, desc and picture)
   * @returns A number which is the id of the team created
   */
  save = (team: TeamNameDescPict): Observable<number> => {
    let data = {
      id: this.nextId++,
      name: team.name,
      desc: team.desc,
      picture: team.picture,
      salons: [],
      users: [],
      roles: []
    };
    teams[data.id] = data;
    return new Observable<number>(obs => {
      obs.next(data.id);
      obs.complete();
    });
  }

  afficheEquipes = (): Observable<TeamNamePict[]> => {
    let res = [];
    Object.values(teams).forEach(team => {
      res.push(TeamService.generateTeamNamePicture(team.id));
    });
    return new Observable<TeamNamePict[]>(obs => {
      obs.next(res);
      obs.complete();
    });
  }

  // ================================================================================================

  findNamePicDescById = (teamId: number): Observable<TeamNameDescPict> => {
    return new Observable<TeamNameDescPict>(obs => {
      obs.next(new TeamNameDescPict("IBM", "Desc Ibm", "1.png"));
      obs.complete();
    });
  }

  // ================================================================================================


  /**
   * 
   * @param teamm
   * @returns 
   */
  findMembersByTeamId = (teamId: number): Observable<Member[]> => {
    return new Observable<Member[]>(obs => {
      obs.next([new Member(1, "Jason", "Vennin", [1]), new Member(2, "Luca", "Boulet", [2])]);
      obs.complete();
    })
  }

  // ================================================================================================
  // TODO [back]

  static generateTeamNamePicture = (teamId: number): TeamNamePict => {
    if (!(teamId in teams)) {
      console.error("teamId doesn't exist:", teamId);
      return undefined;
    }
    return new TeamNamePict(teams[teamId].id, teams[teamId].name, teams[teamId].picture);
  }

  /**
   * Add a role to the team
   * @param teamId id of the team
   * @param roleId id of the role
   */
  addRoleToTeam = (teamId: number, roleId: number) => {
    teams[teamId].roles.push(roleId);
  }

  /**
   * Delete one role from a team
   * @param teamId id of the team you re looking for
   * @param roleId id of the role you want to delete
   */
  deleteRoleToTeam = (teamId: number, roleId: number) => {
    let arr = teams[teamId].roles;
    for (var index = 0; index < arr.length; index++) {

      if (arr[index] === roleId) {
        arr.splice(index, 1);
      }
    }
  }

  /**
   * Return the list of id which are role's id
   * @param teamId 
   * @returns a list of number
   */
  findRolesByTeamId = (teamId: number): Observable<number[]> => {
    return new Observable<number[]>(obs => {
      obs.next(teams[teamId].roles);
      obs.complete();
    });
  }
}

// TODO [back]
let teams: { [id: number]: { id: number, name: string, desc: string, picture: string, users: number[], roles: number[] } } =
{
  1: {
    id: 1,
    name: "IBM",
    desc: "International Business Machines Corporation",
    picture: "1.png",
    users: [1, 2, 10, 20],
    roles: [1, 2, 3]
  },
  2: {
    id: 2,
    name: "IDP",
    desc: "Invest in Digital People",
    picture: "2.jpg",
    users: [1, 2],
    roles: []
  },
  3: {
    id: 3,
    name: "M2i",
    desc: "M2i formations, Hauts-de-France",
    picture: "3.png",
    users: [10, 20],
    roles: []
  },
  10: {
    id: 10,
    name: "Semifir",
    desc: "Ceci est la description de l'équipe Semifir",
    picture: "4.png",
    users: [10, 20, 2, 1],
    roles: []
  }
};
