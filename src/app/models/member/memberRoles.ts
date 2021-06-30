import { Role } from "../role/role";
import { RoleWithoutRights } from "../role/roleWithoutRights";
import { UserNamePict } from "../user/userNamePict";

export class MemberRoles {

  private _id: string;
  private _user: UserNamePict;
  private _roles: RoleWithoutRights[];

  constructor(id: string, user: UserNamePict, roles: RoleWithoutRights[]) {
    this._id = id;
    this._user = user;
    this._roles = roles;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  public get user(): UserNamePict {
    return this._user;
  }
  public set user(value: UserNamePict) {
    this._user = value;
  }

  public get roles(): RoleWithoutRights[] {
    return this._roles;
  }
  public set roles(value: RoleWithoutRights[]) {
    this._roles = value;
  }

}



