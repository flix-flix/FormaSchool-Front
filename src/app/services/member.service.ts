import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Member } from '../models/member';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  /**
   * This function help for updating a team with a small presentation
   * @returns a update team
   
  getById = (id: Number): Observable<Members> => {
    return this.http.get<Members>
  }*/

  updateMember = () => {
    return new Observable<Member>(obs => {
      obs.next(new Member(0, " ", " ", []));
      obs.complete();
    });

  }

  /**
   * This function return a presentation of each user. It contain lastname, firstname, id and role
   * @returns an array ofobject
   */
  findAllMemberRoles = (): Member[] => {
    let result: Member[] = [];
    Object.values(_users).forEach(user => {
      result.push(this.generateUserWithRole(user.id));
    });
    return result;
  }
  // TODO [back]
  generateUserWithRole = (userId): Member => {
    if (!(userId in _users)) {
      console.error("userId doesn't exist:", userId);
      return undefined;
    }
    return new Member(_users[userId].id, _users[userId].lastname, _users[userId].firstname, _users[userId].roles);
  }
}
let _users: {
  [id: number]: { id: number, firstname: string, lastname: string, roles: number[] }
} = {
  1: {
    id: 1,
    firstname: "Félix",
    lastname: "Burie",
    roles: [1]
  },
  2: {
    id: 2,
    firstname: "Jason",
    lastname: "Vennin",
    roles: [1, 2]
  },
  10: {
    id: 10,
    firstname: "Luca",
    lastname: "Novelli",
    roles: [3]
  },
  20: {
    id: 20,
    firstname: "Bouchaib",
    lastname: "Faham",
    roles: [2, 3]
  },
}


