export class EmojiNamePict {
    private _id: number;
    private _name: string;
    private _picture: string;

    constructor(id: number, name: string, picture: string) {
        this._id = id;
        this._name = name;
        this._picture = picture
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
