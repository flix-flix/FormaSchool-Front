import { MemberUsersPseudo } from "src/app/models/member/MemberUsersPseudo";
import { EmojiNamePict } from "./emojiNamePict";

export class Reaction {

    // TODO [Improve] Add date
    constructor(private _emoji: EmojiNamePict, private _name: string, private _users: MemberUsersPseudo[]) { }

    public get emoji(): EmojiNamePict {
        return this._emoji;
    }

    public set emoji(emoji: EmojiNamePict) {
        this._emoji = emoji;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get members(): MemberUsersPseudo[] {
        return this._users;
    }

    public set members(users: MemberUsersPseudo[]) {
        this._users = users;
    }
}