import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../models/team/team';
import { TeamNameDescPict } from '../models/team/teamNameDescPict';
import { TeamNamePict } from '../models/team/teamNamePict';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }
  // ==============================================================================================
  getTeamById = (teamId: String): Observable<TeamNameDescPict> => {
    return this.http.get<TeamNameDescPict>(`${environment.apiUrl}/teams/${teamId}`);
  }

  findTeamIdBySalonId = (salonId: string): Observable<Team> => {
    return this.http.get<Team>(`${environment.apiUrl}/teams/bySalon/${salonId}`);
  }

  findAllTeamOfUser = (userId: string): Observable<TeamNamePict[]> => {
    return this.http.get<TeamNamePict[]>(environment.apiUrl + "/teams/ofUser/" + userId);
  }

  findNamePicDescById = (teamId: string): Observable<TeamNameDescPict> => {
    return this.http.get<TeamNameDescPict>(environment.apiUrl + "/teams/teamNameDescPict/" + teamId)
  }

  /**
   * This function return a quick presentation of each team. It contain name, picture and the id
   * @returns an array of TeamLinkUser object
   */
  findAllPresentation = (): Observable<TeamNamePict[]> => {
    return this.http.get<TeamNamePict[]>(`${environment.apiUrl}/teams/teamNamePict`);
  }

  /** Returns the name and the picture for the given team */
  findNamePictureById = (teamId: string): Observable<TeamNamePict> => {
    return this.http.get<TeamNamePict>(environment.apiUrl + "/teams/teamNamePict/" + teamId);
  }

  // ==============================================================================================
  updateTeamNameDescPic = (team: TeamNameDescPict): Observable<TeamNameDescPict> => {
    return this.http.patch<TeamNameDescPict>(environment.apiUrl + "/teams/teamNameDescPict", team);
  }

  /**
 * This function allows us to save a team
 * @param team A creationTeam object (name, desc and picture)
 * @returns A number which is the id of the team created
 */
  save = (team: TeamNameDescPict): Observable<Team> => {
    return this.http.post<Team>(`${environment.apiUrl}/teams`, team);
  }
}
