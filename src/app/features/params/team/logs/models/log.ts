export class Log {

    private _picture: string;
    private _firstname: string;
    private _lastname: string;
    private _date: Date;
    private _desc: string;

    constructor(picture: string, firstname: string, lastname: string, date: Date, desc: string) {
        this._picture = picture;
        this._firstname = firstname;
        this._lastname = lastname;
        this._date = date;
        this._desc = desc;
    }

    public get picture(): string {
        return this._picture;
    }
    public set picture(value: string) {
        this._picture = value;
    }
    public get desc(): string {
        return this._desc;
    }
    public set desc(value: string) {
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