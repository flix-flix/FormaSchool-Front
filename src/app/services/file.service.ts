import { Injectable } from '@angular/core';
import { File } from '../models/file';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

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
