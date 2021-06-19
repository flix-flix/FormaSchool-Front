import { UserNamePict } from "../user/userNamePict";

export class MemberUserNamePict {
    private _id: string;
    private _user: UserNamePict;


    constructor(id: string, user: UserNamePict) {
        this._id = id;
        this._user = user;
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
}