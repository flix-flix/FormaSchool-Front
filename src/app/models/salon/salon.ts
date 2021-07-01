import { MsgThreadComponent } from "src/app/components/messages/msg-thread/msg-thread.component";
import { Message } from "src/app/models/messages/message";
import { Member } from "../member/member";

export class Salon {
    id: string;
    teamId: string;
    name: string;
    msgs: Message[];
    thread: MsgThreadComponent;
    member: Member;

    html?: string;
}
