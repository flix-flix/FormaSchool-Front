import { RoleWithoutRights } from "../role/roleWithoutRights";
import { UserNamePict } from "../user/userNamePict";

export interface MemberRoles {
  id: string;
  user: UserNamePict;
  roles: RoleWithoutRights[];
}
