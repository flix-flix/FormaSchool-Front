import { FileModel } from "src/app/models/file";
import { MemberUserPseudo } from "src/app/models/member/memberPseudoUser";
import { Reaction } from "../reactions/reaction";

export interface Message {
    id: string;
    sender: MemberUserPseudo;
    teamId: string;
    salonId: string;

    content: string;
    file: FileModel;
    reactions: Reaction[];

    send: Date;
    edit: Date;

    html?: string;
}
