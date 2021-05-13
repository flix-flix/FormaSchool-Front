import { Team } from "./team";

export class User{

    private _id: number;
    private _firstname: string;
    private _lastname: string;
    private _password: string;
    private _email: string;
    private _create: Date;
    private _picture: string;
    

    constructor(firstname:string, lastname:string, password:string, email:string, create:Date, picture:string){
        this._firstname = firstname;
        this._lastname = lastname;
        this._password = password;
        this._email = email;
        this._create = create;
        this._picture = picture;
    }

    public get firstname(): string {
        return this._firstname;
    }
    public set firstname(value: string) {
        this._firstname = value;
    }
    public get lastname(): string {
        return this._lastname;
    }
    public set lastname(value: string) {
        this._lastname = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get create(): Date {
        return this._create;
    }
    public set create(value: Date) {
        this._create = value;
    }
    public get picture(): string {
        return this._picture;
    }
    public set picture(value: string) {
        this._picture = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}