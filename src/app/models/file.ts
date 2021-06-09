export class File {
    private static imgExt: string[] = ["png", "jpg", "svg"];
    private static textExt: string[] = ["txt", "html", "css", "js", "ts", "java", "json", "yaml", "py", "sql"];

    private _id: number;
    private _name: string;
    private _path: string;

    constructor(id: number, name: string, path: string) {
        this._id = id;
        this._name = name;
        this._path = path;
    }

    // ==========

    public getExt(): string {
        return this.path.split(".").pop();
    }

    public isImage() {
        return File.imgExt.includes(this.getExt());
    }

    public isText() {
        return File.textExt.includes(this.getExt());
    }

    // ==========

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

    public get path(): string {
        return this._path;
    }

    public set path(path: string) {
        this._path = path;
    }
}
