import { MemberUserPseudo } from "../member/memberPseudoUser";
import { RoleWithoutRights } from "../role/roleWithoutRights";

export interface PermissionMemberRoleWithoutRights {
    id: string;
    member: MemberUserPseudo;
    role: RoleWithoutRights;
}
