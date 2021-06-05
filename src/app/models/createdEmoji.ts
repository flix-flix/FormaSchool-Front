import { UserNamePict } from "src/app/models/userNamePict";

export class CreatedEmoji {
    private _id: number;
    private _teamId: number;
    private _name: string;
    private _picture: string;
    private _user: UserNamePict;

    constructor(id: number, teamId: number, name: string, picture: string, user: UserNamePict) {
        this._id = id;
        this._teamId = teamId;
        this._name = name;
        this._picture = picture;
        this._user = user;
    }

    public get teamId(): number {
        return this._teamId;
    }
    public set teamId(value: number) {
        this._teamId = value;
    }
    public get user(): UserNamePict {
        return this._user;
    }
    public set user(value: UserNamePict) {
        this._user = value;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get picture(): string {
        return this._picture;
    }

    public set picture(picture: string) {
        this._picture = picture;
    }
}
