export class createRole {

    private _name: string;
    private _color: string;


    constructor(name: string, color: string) {
        this._name = name;
        this._color = color;
    }
    public toJSON() {
        return {
            name: this._name,
            color: this._color,
        };
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