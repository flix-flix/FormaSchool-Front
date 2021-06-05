export class Log {

    private _userId: number;
    private _type: number;
    private _teamId: number;
    private _date: Date;
    private _desc: string;

    constructor(userId: number, type: number, teamId: number, date: Date, desc: string) {
        this._userId = userId;
        this._type = type;
        this._teamId = teamId;
        this._date = date;
        this._desc = desc;
    }

    public get teamId(): number {
        return this._teamId;
    }
    public set teamId(value: number) {
        this._teamId = value;
    }
    public get type(): number {
        return this._type;
    }
    public set type(value: number) {
        this._type = value;
    }
    public get userId(): number {
        return this._userId;
    }
    public set userId(value: number) {
        this._userId = value;
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