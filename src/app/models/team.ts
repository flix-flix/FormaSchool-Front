import { Salon } from "./salon";

export class Team{

    private _id: number;
    private _name: string;
    private _desc: string;
    private _isPrivate: boolean;
    private _picture: string;
    private _salons: Salon[];

    constructor(id:number, name:string, desc:string, isPrivate:boolean, picture:string, salons:Salon[]){
        this._id=id;
        this._name=name;
        this._desc=desc;
        this._isPrivate=isPrivate;
        this._picture=picture;
        this._salons= salons;
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
    public get isPrivate(): boolean {
        return this._isPrivate;
    }
    public set isPrivate(value: boolean) {
        this._isPrivate = value;
    }
    public get picture(): string {
        return this._picture;
    }
    public set picture(value: string) {
        this._picture = value;
    }
    public get salons(): Salon[] {
        return this._salons;
    }
    public set salons(value: Salon[]) {
        this._salons = value;
    }
}