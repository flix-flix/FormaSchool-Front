import { HtmlParser } from "@angular/compiler";

export class Message {
    private _id: number;
    private _sender: number;
    private _date: Date;
    private _content: string;

    private _html: string;

    constructor(id: number, sender: number, date: Date, content: string) {
        this._id = id;
        this._sender = sender;
        this._date = date;
        this._content = content;

        this._html = processHtml(content);
    }

    // ===============================================

    public getSenderStr = (): string => {
        return "Utilisateur " + this.sender;
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

    public get html(): string {
        return this._html;
    }
}

const nf = new Intl.NumberFormat("fr-FR", { minimumIntegerDigits: 2 });

/** Generate an HTML representaion with balises from content */
const processHtml = (content): string => {
    // multiline
    let html = content.replace(/\n/g, "<br>");

    html = processHtmlSpan(html, "**", '<span class="bold">', "</span>");
    html = processHtmlSpan(html, "*", '<span class="italic">', "</span>");
    html = processHtmlSpan(html, "__", '<span class="under">', "</span>");
    html = processHtmlSpan(html, "~~", '<span class="strike">', "</span>");

    return html;
}

const processHtmlSpan = (content: string, search: string, open: string, close: string): string => {
    let html = "";
    let first = 0, second = 0, prev = 0;
    while ((first = content.indexOf(search, prev)) != -1 && (second = content.indexOf(search, first + search.length)) != -1) {
        html += content.substring(prev, first) + open + content.substring(first + search.length, second) + close;
        prev = second + search.length;
    }
    html += content.substring(prev);

    return html;
}
