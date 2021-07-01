import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../models/team/team';
import { User } from '../models/user/user';
import { UserConnect } from '../models/user/userConnect';
import { UserCreation } from '../models/user/userCreation';
import { UserCreationWithFile } from '../models/user/userCreationWithFile';
import { UserLocalStorage } from '../models/user/userLocalStorage';
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

  connect = (user: UserConnect): Observable<UserLocalStorage> => {
    return this.http.post<UserLocalStorage>(environment.apiUrl + "/users/connect", user);
  }

  // ================================================================================================

  /**
   * This function return a quick presentation of each user which arent in the team refered by the id.
   * @param id the id of the team
   * @returns a list of UserLinkTeam which dont have the team
   */
  userNotInTheTeam = (teamId: string): Observable<UserNamePict[]> => {
    return this.http.get<UserNamePict[]>(`${environment.apiUrl}/users/userNotInTheTeam/${teamId}`);
  }

  /**
   * This function allows us to save a user
   * @param user A creationUser object (firstname, lastname, password, email and picture)
   * @returns A user 
   */
  save = (user: UserCreation): Observable<User> => {
    return this.http.post<User>(`${environment.apiUrl}/users/add`, user);
  }

  saveWithFile = (user: UserCreationWithFile) => {
    if (user.file != undefined) {
      let reader = new FileReader();
      reader.readAsDataURL(user.file);
      reader.onloadend = () => {
        this.http.post<Team>(`${environment.apiUrl}/users/saveWithFile`, { ...user, file: reader.result, filename: user.file.name }).subscribe();
      }
    }
  }
}
