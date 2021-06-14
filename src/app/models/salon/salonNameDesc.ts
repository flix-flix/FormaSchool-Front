

export class SalonNameDesc {

    private _id: number;
    private _name: string;
    private _desc: string;

    constructor(id: number, name: string, desc: string) {
        this._id = id;
        this._name = name;
        this._desc = desc;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get desc(): string {
        return this._desc;
    }

    public set desc(desc: string) {
        this._desc = desc;
    }






}