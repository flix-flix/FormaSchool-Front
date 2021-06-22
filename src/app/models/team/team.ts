import { Role } from "../role/role";

export interface Team {
    id: string;
    name: string;
    desc: string;
    picture: string;
    roles: Role[];
}
