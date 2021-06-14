export class Role {

    private _id: string;
    private _name: string;
    private _color: string;
    private _rights: { desc: string; value: boolean; }[];
    private _commonRights: { desc: string; value: boolean; }[];

    constructor(id: string, name: string, color: string, rights: { desc: string; value: boolean; }[], commonRights: { desc: string; value: boolean; }[]) {
        this._id = id;
        this._name = name;
        this._color = color;
        this._rights = rights;
        this._commonRights = commonRights;
    }

    public get commonRights(): { desc: string; value: boolean; }[] {
        return this._commonRights;
    }
    public set commonRights(value: { desc: string; value: boolean; }[]) {
        this._commonRights = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get rights(): { desc: string; value: boolean; }[] {
        return this._rights;
    }
    public set rights(value: { desc: string; value: boolean; }[]) {
        this._rights = value;
    }
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}