import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from '../models/file';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  /** Download the file */
  download = (file: File): void => {
    this.http.get("http://localhost:4200/assets/images/_remove/shared_files/" + file.path, { responseType: "blob" }).subscribe(blob => {
      let a = document.createElement("a");
      let url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = file.name;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  // ================================================================================================
  // TODO [back]

  static generateFile = (fileId: number): File => {
    if (!(fileId in files)) {
      console.error("msgId doesn't exist:", fileId);
      return undefined;
    }
    return new File(files[fileId].id, files[fileId].name, files[fileId].path);
  }
}

let files: { [id: number]: { id: number, name: string, path: string } } = {
  1: { id: 1, name: "euratechnologies.png", path: "1.png" },
  2: { id: 2, name: "stackoverflow.png", path: "2.png" },
  3: { id: 3, name: "java.jpg", path: "3.jpg" },
  4: { id: 4, name: "hello.txt", path: "4.txt" },
}
