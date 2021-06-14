import { TeamNamePict } from "../team/teamNamePict";
import { UserNamePict } from "../user/userNamePict";

export class MemberCreate {

    private _team: TeamNamePict;
    private _user: UserNamePict;

    constructor(team: TeamNamePict, user: UserNamePict) {
        this._team = team;
        this._user = user;
    }

    public toJSON() {
        return {
            team: this._team,
            user: this._user
        };
    }

    public get team(): TeamNamePict {
        return this._team;
    }
    public set team(value: TeamNamePict) {
        this._team = value;
    }
    public get user(): UserNamePict {
        return this._user;
    }
    public set user(value: UserNamePict) {
        this._user = value;
    }
}