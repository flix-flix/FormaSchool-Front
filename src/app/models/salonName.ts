import { EmojiService } from "../services/emoji.service";

export class SalonName {
    private _id: number;
    private _name: string;

    private _html: string;

    // TODO teamId ?
    constructor(id: number, private _teamId: number, name: string) {
        this._id = id;
        this._name = name;

        this._html = EmojiService.processEmoji(name, 4, 0);
    }

    // ===============================================

    static fromJSON = (json: any): SalonName => {
        return new SalonName(json.id, json.team.id, json.name);
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

    // =====

    public get html(): string {
        return this._html;
    }
}
