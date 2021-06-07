export class TeamNameDescPict {
    getById(id: number) {
        throw new Error('Method not implemented.');
    }

    private _name: string;
    private _desc: string;
    private _picture: string;

    constructor(name: string, desc: string, picture: string) {
        this._name = name;
        this._desc = desc;
        this._picture = picture;
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
}
