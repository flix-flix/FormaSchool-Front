export class USerLocalStorage {
    private _id: string;
    private _firstname: string;
    private _lastname: string;
    private _picture: string;

    // TODO [Improve] add team and role to localStorage
    // private _members: Member[];

    constructor(id: string, firstname: string, lastname: string, picture: string) {
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
        this._picture = picture;
    }

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }

    public get firstname(): string {
        return this._firstname;
    }

    public set firstname(firstname: string) {
        this._firstname = firstname;
    }

    public get lastname(): string {
        return this._lastname;
    }

    public set lastname(lastname: string) {
        this._lastname = lastname;
    }

    public get picture(): string {
        return this._picture;
    }

    public set picture(picture: string) {
        this._picture = picture;
    }
}
