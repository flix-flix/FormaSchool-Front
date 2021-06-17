export class PermissionRights {

    private _id: string;
    private _commonRights: { desc: string; value: boolean; }[];


    constructor(id: string, commonRights: { desc: string; value: boolean; }[]) {
        this._id = id;
        this._commonRights = commonRights;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get commonRights(): { desc: string; value: boolean; }[] {
        return this._commonRights;
    }
    public set commonRights(value: { desc: string; value: boolean; }[]) {
        this._commonRights = value;
    }
}