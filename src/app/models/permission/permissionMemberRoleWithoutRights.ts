
import { MemberUsersPseudo } from "../member/MemberUsersPseudo";
import { RoleWithoutRights } from "../role/roleWithoutRights";

export class PermissionMemberRoleWithoutRights {

    private _id: string;
    private _member: MemberUsersPseudo;
    private _role: RoleWithoutRights;


    constructor(id: string, member: MemberUsersPseudo, role: RoleWithoutRights) {
        this._id = id;
        this._member = member;
        this._role = role;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get member(): MemberUsersPseudo {
        return this._member;
    }
    public set member(value: MemberUsersPseudo) {
        this._member = value;
    }
    public get role(): RoleWithoutRights {
        return this._role;
    }
    public set role(value: RoleWithoutRights) {
        this._role = value;
    }
}