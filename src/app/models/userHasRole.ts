import { Role } from "../features/roles/models/role";

export class UserHasRole {

    private _id: number;
    private _lastname: string;
    private _firstname: string;
    private _roles: number[];

    constructor(id: number, firstname: string, lastname: string, roles: number[]) {
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
        this._roles = roles;
    }

    /**
     * This function is needed to filter on lastname AND firstname
     */
    public get search(): string {
        return `${this._firstname} ${this._lastname}`
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get lastname(): string {
        return this._lastname;
    }

    public set lastname(value: string) {
        this._lastname = value;
    }

    public get firstname(): string {
        return this._firstname;
    }

    public set firstname(value: string) {
        this._firstname = value;
    }

    public get roles(): number[] {
        return this._roles;
    }
    public set roles(value: number[]) {
        this._roles = value;
    }

}