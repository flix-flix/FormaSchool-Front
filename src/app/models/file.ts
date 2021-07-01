export class FileModel {
    private static imgExt: string[] = ["png", "jpg", "svg"];
    private static textExt: string[] = ["txt", "html", "css", "js", "ts", "java", "json", "yaml", "py", "sql"];

    private _id: string;
    private _name: string;
    private _path: string;

    constructor(id: string, name: string, path: string) {
        this._id = id;
        this._name = name;
        this._path = path;
    }

    // ==========

    static fromJSON = (json): FileModel => {
        if (json == null)
            return null;

        let split = json.name.split(".");
        let ext = "";
        if (split.length != 1)
            ext = "." + split.pop();

        return new FileModel(json.id, json.name, json.id + ext);
    }

    // ==========

    public getExt(): string {
        return this.path.split(".").pop();
    }

    public isImage() {
        return FileModel.imgExt.includes(this.getExt());
    }

    public isText() {
        return FileModel.textExt.includes(this.getExt());
    }

    // ==========

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
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
