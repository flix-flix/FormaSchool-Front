export class Log {

    private _firstname: string;
    private _lastname: string;
    private _date: Date;
    private _desc: string;

    constructor(firstname: string, lastname: string, date: Date, desc: string) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._date = date;
        this._desc = desc;
    }

    public get desc_1(): string {
        return this._desc;
    }
    public set desc_1(value: string) {
        this._desc = value;
    }
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }
    public get firstname(): string {
        return this._firstname;
    }
    public set firstname(value: string) {
        this._firstname = value;
    }
    public get lastname(): string {
        return this._lastname;
    }
    public set lastname(value: string) {
        this._lastname = value;
    }
}