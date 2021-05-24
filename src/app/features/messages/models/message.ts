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

        this._html = Message.processHtml(content);
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

    /** Generate an HTML representation of the content (with tags if markdown is used)
     * @param content The original string
     * @param replace true: remove the markdown markers
     */
    static processHtml = (content: string, replace: boolean = true): string => {
        let html = content.replace(/\n/g, "<br>");

        html = Message.processHtmlSpan(html, "**", "bold", replace);
        html = Message.processHtmlSpan(html, /((?<!\*)\*{1}(?!\*))|\*{3}/, "italic", replace); // *italic* | ***italic***
        html = Message.processHtmlSpan(html, "__", "under", replace);
        html = Message.processHtmlSpan(html, "~~", "strike", replace);

        return html;
    }

    /**
     * Add HTML tags for the given md marker
     * 
     * @param content The original string
     * @param search The markdown marker
     * @param clas The HTML class
     * @param replace true: remove the markdown markers
     * @returns A new string with the HTML tags
     */
    static processHtmlSpan = (content: string, search: string | RegExp, clas: string, replace: boolean = true): string => {
        let html = "";
        let first = 0, second = 0, prev = 0;
        let len = typeof search === "string" ? search.length : (clas == "italic" ? 1 : 2);

        // If contains 2 occurences of the given "md marker"
        while ((first = Message.indexOf(content, search, prev)) != -1
            && (second = Message.indexOf(content, search, first + len)) != -1) {
            html += content.substring(prev, first);
            html += `<span class="${clas}">${content.substring(first + (replace ? len : 0), second + (replace ? 0 : len))}</span>`;
            prev = second + len;
        }

        // Add the remaining content
        return html + content.substring(prev);
    }

    /** indexOf (string and regex) */
    static indexOf = (text: string, search: string | RegExp, start: number) => {
        if (typeof search === "string")
            return text.indexOf(<string>search, start); // string
        let index = text.slice(start).search(search); // regex
        return index < 0 ? index : index + start; // return -1
    }
}

const nf = new Intl.NumberFormat("fr-FR", { minimumIntegerDigits: 2 });
