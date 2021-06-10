import { File } from "src/app/models/file";
import { MemberUsersPseudo } from "src/app/models/member/MemberUsersPseudo";
import { EmojiService } from "src/app/services/emoji.service";
import { Reaction } from "./reaction";

export class Message {
    private _id: number;
    private _sender: MemberUsersPseudo;
    private _send: Date;
    private _edit: Date;
    private _content: string;
    private _file: File;
    private _reactions: Reaction[];

    private _html: string;

    constructor(id: number, sender: MemberUsersPseudo, send: Date | string, edit: Date | string, content: string, file: File, reactions: Reaction[] = []) {
        this._id = id;
        this._sender = sender;
        this._send = send instanceof Date ? send : new Date(send);
        this._edit = edit instanceof Date ? edit : new Date(edit);
        this._content = content;
        this._file = file;
        this._reactions = reactions;

        this._html = Message.processHtml(content);
    }

    // ===============================================

    static fromJSON = (json: Message): Message => {
        return new Message(json.id, json.sender, json.send, json.edit, json.content, json.file, json.reactions);
    }

    // ===============================================

    /** Returns the time (hh:mm) */
    public getTimeStr = (): string => {
        return nf.format(this.send.getHours()) + ":" + nf.format(this.send.getMinutes());
    }

    public processEmoji = (teamId: string) => {
        this._html = EmojiService.processEmoji(this._html, 5, teamId);
    }

    // ===============================================

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get sender(): MemberUsersPseudo {
        return this._sender;
    }

    public set sender(sender: MemberUsersPseudo) {
        this._sender = sender;
    }

    public get send(): Date {
        return this._send;
    }

    public set send(send: Date) {
        this._send = send;
    }

    public get edit(): Date {
        return this._edit;
    }

    public set edit(edit: Date) {
        this._edit = edit;
    }

    public get content(): string {
        return this._content;
    }

    public set content(content: string) {
        this._content = content;
    }

    public get file(): File {
        return this._file;
    }

    public set file(file: File) {
        this._file = file;
    }

    public get reactions(): Reaction[] {
        return this._reactions;
    }

    public set reactions(reactions: Reaction[]) {
        this._reactions = reactions;
    }

    // =====

    public get html(): string {
        return this._html;
    }

    // ================================================================================================
    // Smart

    /** Generate an HTML representation of the content (with tags if markdown is used)
       * @param content The original string
       * @param replace true: remove the markdown markers
       */
    static processHtml = (content: string, replace: boolean = true): string => {
        let html = content.replace(/\n/g, "<br>");
        html = html.replace(/  /g, " &nbsp;");//TODO [Improve] space -> &nbsp;

        html = Message.processHtmlSpan(html, "**", "bold", replace);
        html = Message.processHtmlSpan(html, /((?<!\*)\*{1}(?!\*))|\*{3}/, "italic", replace); // *italic* | ***italic***
        html = Message.processHtmlSpan(html, "__", "under", replace);
        html = Message.processHtmlSpan(html, "~~", "strike", replace);

        html = Message.processHtmlSpan(html, "```", "md_bloc", replace);
        html = Message.processHtmlSpan(html, /((?<!`)`{1}(?!`))/, "md_bloc_inline", replace);

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
        let len = typeof search === "string" ? search.length : (["italic", "md_bloc_inline"].includes(clas) ? 1 : 2);

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

    // ================================================================================================
    // TODO [Utils]

    /** indexOf (string and regex) */
    static indexOf = (text: string, search: string | RegExp, start: number) => {
        if (typeof search === "string")
            return text.indexOf(<string>search, start); // string
        let index = text.slice(start).search(search); // regex
        return index < 0 ? index : index + start; // return -1
    }
}

const nf = new Intl.NumberFormat("fr-FR", { minimumIntegerDigits: 2 });
