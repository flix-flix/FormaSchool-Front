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
import { UserPassword } from '../models/user/userPassword';
import { UserSettings } from '../models/user/userSettings';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlSettings = environment.apiUrl + "/userSettings/";

  constructor(private http: HttpClient) { }

  // ================================================================================================
  // Connect

  /** Try to connect to the server
   * @returns an user object to store in the localStorage (if valid)
   */
  connect = (user: UserConnect): Observable<UserLocalStorage> => {
    return this.http.post<UserLocalStorage>(environment.apiUrl + "/users/connect", user);
  }

  // ================================================================================================

  findNamePictById = (userId: string): Observable<UserNamePict> => {
    return this.http.get<UserNamePict>(environment.apiUrl + "/users/namePict/" + userId);
  }

  // ================================================================================================
  // Settings

  findSettingsById = (userId: string): Observable<UserSettings> => {
    return this.http.get<UserSettings>(this.urlSettings + userId);
  }

  updateSettings(settings: UserSettings) {
    return this.http.patch<UserSettings>(this.urlSettings, settings);
  }

  updatePassword(user: UserPassword) {
    return this.http.patch<UserPassword>(this.urlSettings + "password ", user);
  }

  // ================================================================================================
  // Admin

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
