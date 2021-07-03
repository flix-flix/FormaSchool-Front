import { FileModel } from "src/app/models/file";
import { MemberUsersPseudo } from "src/app/models/member/memberPseudoUser";
import { Reaction } from "../reaction";

export interface Message {
    id: string;
    sender: MemberUsersPseudo;
    teamId: string;
    salonId: string;

    content: string;
    file: FileModel;
    reactions: Reaction[];

    send: Date;
    edit: Date;

    html?: string;
}
