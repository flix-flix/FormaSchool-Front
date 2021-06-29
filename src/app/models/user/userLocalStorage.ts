import { Member } from "../member/member";

export interface UserLocalStorage {
    id: string;
    firstname: string;
    lastname: string;
    picture: string;

    members: Member[];
}
