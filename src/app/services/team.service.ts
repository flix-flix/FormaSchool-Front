import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../models/role/role';
import { Team } from '../models/team/team';
import { TeamNameDescPict } from '../models/team/teamNameDescPict';
import { TeamNamePict } from '../models/team/teamNamePict';



@Injectable({
  providedIn: 'root'
})
export class TeamService {

  nextId: number = 11;

  constructor(private http: HttpClient) { }
  // ==============================================================================================
  getTeamById = (teamId: String): Observable<TeamNameDescPict> => {
    return this.http.get<TeamNameDescPict>(`${environment.apiUrl}/teams/${teamId}`);
  }

  // ==============================================================================================

  findAllTeamOfUser = (userId: string): Observable<TeamNamePict[]> => {
    return this.http.get<TeamNamePict[]>(environment.apiUrl + "/teams/ofUser/" + userId);
  }

  // ==============================================================================================
  updateTeamNameDescPic = (team: TeamNameDescPict): Observable<TeamNameDescPict> => {
    return this.http.patch<TeamNameDescPict>(environment.apiUrl, "/teams/teamNameDescPic" + team);
  }

  // ===============================================================================================
  findNamePicDescById = (teamId: string): Observable<TeamNameDescPict> => {
    return this.http.get<TeamNameDescPict>(environment.apiUrl + "/teams/teamNameDescPict/" + teamId)
  }

  /** Returns the name and the picture for the given team */
  findNamePictureById = (teamId: string): Observable<TeamNamePict> => {
    return this.http.get<TeamNamePict>(environment.apiUrl + "/teams/teamNamePict/" + teamId);
  }
  // ================================================================================================

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
   * This function return a quick presentation of each team. It contain name, picture and the id
   * @returns an array of TeamLinkUser object
   */
  findAllPresentation = (): Observable<TeamNamePict[]> => {
    return this.http.get<TeamNamePict[]>(`${environment.apiUrl}/teams/teamNamePict`);
  }

  /**
   * This function allows us to save a team
   * @param team A creationTeam object (name, desc and picture)
   * @returns A number which is the id of the team created
   */
  save = (team: TeamNameDescPict): Observable<Team> => {
    return this.http.post<Team>(`${environment.apiUrl}/teams`, team);
  }

  // ================================================================================================

  /*findNamePicDescById = (teamId: number): Observable<TeamNameDescPict> => {
    return new Observable<TeamNameDescPict>(obs => {
      obs.next(new TeamNameDescPict("IBM", "Desc Ibm", "1.png"));
      obs.complete();
    });
  }

  // ================================================================================================




  // ================================================================================================
  // TODO [back]

  static generateTeamNamePicture = (teamId: number): TeamNamePict => {
    if (!(teamId in teams)) {
      console.error("teamId doesn't exist:", teamId);
      return undefined;
    }
    return new TeamNamePict("" + teams[teamId].id, teams[teamId].name, teams[teamId].picture);
  }



  /**
   * Return the list of id which are role's id
   * @param teamId 
   * @returns a list of number
   */
  findRolesByTeamId = (teamId: string): Observable<string[]> => {
    return new Observable<string[]>(obs => {
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
