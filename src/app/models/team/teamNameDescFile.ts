export class TeamNameDescFile {
    private _name: string;
    private _desc: string;
    private _file: File;

    constructor(name: string, desc: string, file: File) {
        this._name = name;
        this._desc = desc;
        this._file = file;
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
    public get file(): File {
        return this._file;
    }
    public set file(value: File) {
        this._file = value;
    }
}