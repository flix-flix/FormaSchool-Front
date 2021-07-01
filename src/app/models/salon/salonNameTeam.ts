import { EmojiService } from "../../services/emoji.service";
import { TeamNamePict } from "../team/teamNamePict";

export class SalonNameTeam {
    private _html: string;

    constructor(private _id: string, private _name: string, private _team: TeamNamePict) {
        this._html = EmojiService.processEmoji(this.name, this.team.id);
    }

    // ===============================================

    static fromJSON = (json: any): SalonNameTeam => {
        return new SalonNameTeam(json.id, json.name, json.team);
    }

    // ===============================================

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }

    public get team(): TeamNamePict {
        return this._team;
    }

    public set team(team: TeamNamePict) {
        this._team = team;
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
