export class UserNamePict {

    private _id: string;
    private _firstname: string;
    private _lastname: string;
    private _picture: string;


    constructor(id: string, firstname: string, lastname: string, picture: string) {
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
        this._picture = picture;
    }

    /**
     * This function is needed to filter on lastname AND firstname
     */
    public get search(): string {
        return `${this._firstname} ${this._lastname}`
    }

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get picture(): string {
        return this._picture;
    }

    public set picture(value: string) {
        this._picture = value;
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
}
