import { Role } from "../role/role";

export class Team {
    private _id: string;
    private _name: string;
    private _desc: string;
    private _picture: string;
    private _roles: Role[];

    constructor(id: string, name: string, desc: string, picture: string, roles: Role[]) {
        this._id = id;
        this._name = name;
        this._desc = desc;
        this._picture = picture;
        this._roles = roles;
    }

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get desc(): string {
        return this._desc;
    }

    public set desc(value: string) {
        this._desc = value;
    }

    public get picture(): string {
        return this._picture;
    }

    public set picture(value: string) {
        this._picture = value;
    }
    public get roles(): Role[] {
        return this._roles;
    }
    public set roles(value: Role[]) {
        this._roles = value;
    }
}
