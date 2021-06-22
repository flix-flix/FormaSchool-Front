import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../models/team/team';
import { TeamNameDescFile } from '../models/team/teamNameDescFile';
import { TeamNameDescPict } from '../models/team/teamNameDescPict';
import { TeamNamePict } from '../models/team/teamNamePict';
import { TeamLogsComponent } from '../pages/params/team/team-logs/team-logs.component';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }
  // ==============================================================================================

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
  save = (team: TeamNameDescFile): Observable<Team> => {
    return this.http.post<Team>(`${environment.apiUrl}/teams`, { name: team.name, desc: team.desc });
  }


  send = (team: TeamNameDescFile) => {
    if (team.file != undefined) {
      let reader = new FileReader();
      reader.readAsDataURL(team.file);
      reader.onloadend = () => {
        this.http.post<Team>(`${environment.apiUrl}/teams/saveWithFile`, { ...team, file: reader.result, filename: team.file.name }).subscribe();
      }
    }
  }
}
