export class TeamNamePict {

    private _id: number;
    private _name: string;
    private _picture: string;

    constructor(id: number, name: string, picture: string) {
        this.id = id
        this._name = name;
        this._picture = picture;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get picture(): string {
        return this._picture;
    }

    public set picture(value: string) {
        this._picture = value;
    }
}
