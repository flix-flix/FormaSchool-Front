import { UserNamePict } from "src/app/models/user/userNamePict";

export class CreatedEmoji {
    private _id: string;
    private _teamId: string;
    private _name: string;
    private _picture: string;
    private _user: UserNamePict;

    constructor(id: string, teamId: string, name: string, picture: string, user: UserNamePict) {
        this._id = id;
        this._teamId = teamId;
        this._name = name;
        this._picture = picture;
        this._user = user;
    }

    public toJSON() {
        return {
            id: this._id,
            teamId: this._teamId,
            name: this._name,
            picture: this._picture,
            user: this._user.toJSON()
        };
    }
    public get teamId(): string {
        return this._teamId;
    }
    public set teamId(value: string) {
        this._teamId = value;
    }
    public get user(): UserNamePict {
        return this._user;
    }
    public set user(value: UserNamePict) {
        this._user = value;
    }

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
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
