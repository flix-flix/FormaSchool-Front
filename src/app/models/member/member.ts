import { Role } from "../role/role";
import { Team } from "../team/team";
import { User } from "../user/user";

export class Member {

    private _id: string;
    private _pseudo: string;
    private _user: User;
    private _team: Team;
    private _roles: Role[];


    constructor(id: string, pseudo: string, user: User, team: Team, roles: Role[]) {
        this._id = id;
        this._pseudo = pseudo;
        this._user = user;
        this._team = team;
        this._roles = roles;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get pseudo(): string {
        return this._pseudo;
    }
    public set pseudo(value: string) {
        this._pseudo = value;
    }
    public get user(): User {
        return this._user;
    }
    public set user(value: User) {
        this._user = value;
    }
    public get team(): Team {
        return this._team;
    }
    public set team(value: Team) {
        this._team = value;
    }
    public get roles(): Role[] {
        return this._roles;
    }
    public set roles(value: Role[]) {
        this._roles = value;
    }
}