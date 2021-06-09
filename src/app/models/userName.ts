export class UserName {
    private _id: number;
    private _firstname: string;
    private _lastname: string;

    constructor(id: number, firstname: string, lastname: string) {
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
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
}
