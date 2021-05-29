export class RoleWithoutRights {

    private _id: number;
    private _name: string;
    private _color: string;


    constructor(id: number, name: string, color: string) {
        this._id = id;
        this._name = name;
        this._color = color;

    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
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