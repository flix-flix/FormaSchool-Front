import { UserNamePict } from "src/app/models/userNamePict";

export class Log {

    private _user: UserNamePict;
    private _type: number;
    private _date: Date;
    private _desc: string;

    constructor(user: UserNamePict, type: number, date: Date, desc: string) {
        this._user = user;
        this._type = type;
        this._date = date;
        this._desc = desc;
    }

    public get user(): UserNamePict {
        return this._user;
    }
    public set user(value: UserNamePict) {
        this._user = value;
    }
    public get type(): number {
        return this._type;
    }
    public set type(value: number) {
        this._type = value;
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
}