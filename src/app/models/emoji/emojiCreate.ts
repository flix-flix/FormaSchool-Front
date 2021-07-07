import { UserNamePict } from "src/app/models/user/userNamePict";

export interface EmojiCreate {
    id?: string;
    teamId: string;
    name?: string;
    picture?: string;
    user?: UserNamePict;
}
