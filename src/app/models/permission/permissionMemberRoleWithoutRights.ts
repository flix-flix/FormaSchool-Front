import { MemberUsersPseudo } from "../member/memberPseudoUser";
import { RoleWithoutRights } from "../role/roleWithoutRights";

export interface PermissionMemberRoleWithoutRights {
    id: string;
    member: MemberUsersPseudo;
    role: RoleWithoutRights;
}
