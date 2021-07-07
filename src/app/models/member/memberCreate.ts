import { TeamNamePict } from "../team/teamNamePict";
import { UserNamePict } from "../user/userNamePict";

export interface MemberCreate {
    team: TeamNamePict;
    user: UserNamePict;
}
