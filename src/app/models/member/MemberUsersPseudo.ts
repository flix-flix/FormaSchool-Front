import { UserNamePict } from "../user/userNamePict";

export class MemberUsersPseudo {

    constructor(private _user: UserNamePict, private _pseudo: string) { }

    public get user(): UserNamePict {
        return this._user;
    }

    public set user(user: UserNamePict) {
        this._user = user;
    }

    public get pseudo(): string {
        return this._pseudo;
    }

    public set pseudo(pseudo: string) {
        this._pseudo = pseudo;
    }
}
