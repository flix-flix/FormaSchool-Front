import { MemberUsersPseudo } from "src/app/models/member/memberPseudoUser";
import { EmojiNamePict } from "./emoji/emojiNamePict";

export interface Reaction {
    // TODO [Improve] Add date
    emoji: EmojiNamePict;
    name: string;
    members: MemberUsersPseudo[];
}