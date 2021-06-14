import { StringifyOptions } from "querystring";

export class RoleWithoutRights {

    private _id: string;
    private _name: string;
    private _color: string;


    constructor(id: string, name: string, color: string) {
        this._id = id;
        this._name = name;
        this._color = color;

    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
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