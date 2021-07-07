import { MsgThreadComponent } from "src/app/components/messages/msg-thread/msg-thread.component";
import { Message } from "src/app/models/messages/message";
import { Member } from "../member/member";
import { TeamNamePict } from "../team/teamNamePict";

export interface Salon {
    id: string;
    team: TeamNamePict;
    name: string;
    messages: Message[];

    thread: MsgThreadComponent;
    member: Member;

    html?: string;
}
