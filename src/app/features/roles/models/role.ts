export class Role {

    private _id: number;
    private _name: string;
    private _color: string;
    private _rights: { desc: string; value: boolean; }[];


    constructor(id: number, name: string, color: string, rights: { desc: string; value: boolean; }[]) {
        this._id = id;
        this._name = name;
        this._color = color;
        this._rights = rights;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
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