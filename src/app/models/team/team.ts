export class Team {
    private _id: number;
    private _name: string;
    private _desc: string;
    private _picture: string;
    private _listOfMembers: number[];
    private _listOfSalons: number[];

<<<<<<< HEAD:src/app/models/team.ts

    constructor(id: number, name: string, desc: string, picture: string, listOfMembers: number[], listOfSalons: number[]) {
=======
    constructor(id: number, name: string, desc: string, picture: string, listOfUsers: number[], listOfSalons: number[]) {
>>>>>>> develop:src/app/models/team/team.ts
        this._id = id;
        this._name = name;
        this._desc = desc;
        this._picture = picture;
        this._listOfMembers = listOfMembers;
        this._listOfSalons = listOfSalons;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get desc(): string {
        return this._desc;
    }

    public set desc(value: string) {
        this._desc = value;
    }

    public get picture(): string {
        return this._picture;
    }

    public set picture(value: string) {
        this._picture = value;
    }
<<<<<<< HEAD:src/app/models/team.ts
    public get listOfMembers(): number[] {
        return this._listOfMembers;
    }
    public set listOfMembers(value: number[]) {
        this._listOfMembers = value;
=======

    public get listOfUsers(): number[] {
        return this._listOfUsers;
    }

    public set listOfUsers(value: number[]) {
        this._listOfUsers = value;
>>>>>>> develop:src/app/models/team/team.ts
    }

    public get listOfSalons(): number[] {
        return this._listOfSalons;
    }

    public set listOfSalons(value: number[]) {
        this._listOfSalons = value;
    }
}
