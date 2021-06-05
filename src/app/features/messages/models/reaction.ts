import { UserName } from "src/app/models/userName";

export class Reaction {
    private _emojiId: number;
    private _name: string;
    private _users: UserName[];
    // TODO [Improve] Add date

    constructor(emojiId: number, name: string, users: UserName[]) {
        this._users = users;
        this._name = name;
        this._emojiId = emojiId;
    }

    public get emojiId(): number {
        return this._emojiId;
    }

    public set emojiId(emojiId: number) {
        this._emojiId = emojiId;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get users(): UserName[] {
        return this._users;
    }

    public set users(users: UserName[]) {
        this._users = users;
    }
}