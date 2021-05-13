export class Message {
    private _id: number;
    private _sender: number;
    private _date: Date;
    private _content: string;

    constructor(id: number, sender: number, date: Date, content: string) {
        this._id = id;
        this._sender = sender;
        this._date = date;
        this._content = content;
    }

    // ===============================================

    public getSenderStr = (): string => {
        return "Utilisateur " + this.id;
    }

    public getTimeStr = (): string => {
        return nf.format(this.date.getHours()) + ":" + nf.format(this.date.getMinutes());
    }

    // ===============================================

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get sender(): number {
        return this._sender;
    }

    public set sender(sender: number) {
        this._sender = sender;
    }

    public get date(): Date {
        return this._date;
    }

    public set date(date: Date) {
        this._date = date;
    }

    public get content(): string {
        return this._content;
    }

    public set content(content: string) {
        this._content = content;
    }
}

const nf = new Intl.NumberFormat("fr-FR", { minimumIntegerDigits: 2 });
