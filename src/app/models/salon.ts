import { Message } from "src/app/features/messages/models/message";
import { EmojiService } from "../services/emoji.service";

export class Salon {
    private _id: number;
    private _teamId: number;
    private _name: string;
    private _msgs: Message[];

    private _html: string;

    constructor(id: number, teamId: number, name: string, msgs: Message[]) {
        this._id = id;
        this._teamId = teamId;
        this._name = name;
        this._msgs = msgs;

        this._html = EmojiService.processEmoji(name, 4, teamId);
    }

    // ===============================================

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get teamId(): number {
        return this._teamId;
    }

    public set teamId(teamId: number) {
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
