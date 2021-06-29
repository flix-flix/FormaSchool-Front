import { Message } from "../messages/message";
import { TeamNamePict } from "../team/teamNamePict";

export interface SalonMessage {
    id: string;
    team: TeamNamePict;
    name: string;
    messages: Message[];
}