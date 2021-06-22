import { Role } from "../role/role";
import { Team } from "../team/team";
import { User } from "../user/user";

export interface Member {
    id: string;
    pseudo: string;
    user: User;
    team: Team;
    roles: Role[];
}
