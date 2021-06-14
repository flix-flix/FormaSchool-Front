import { Message } from "src/app/models/message";
import { EmojiService } from "../../services/emoji.service";

export class Salon {
    private _id: string;
    private _teamId: string;
    private _name: string;
    private _msgs: Message[];

    private _html: string;

    constructor(id: string, teamId: string, name: string, msgs: Message[]) {
        this._id = id;
        this._teamId = teamId;
        this._name = name;
        this._msgs = msgs;

        this._html = EmojiService.processEmoji(name, 4, teamId);
    }

    // ===============================================

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }

    public get teamId(): string {
        return this._teamId;
    }

    public set teamId(teamId: string) {
        this._teamId = teamId;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get msgs(): Message[] {
        return this._msgs;
    }

    public set msgs(msgs: Message[]) {
        this._msgs = msgs;
    }

    // =====

    public get html(): string {
        return this._html;
    }
}
