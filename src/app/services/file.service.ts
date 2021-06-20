import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FileModel } from '../models/file';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  /** Download the file */
  download = (file: FileModel): void => {
    this.http.get(environment.apiUrl + "/files/sharedFiles/" + file.id, { responseType: "blob" }).subscribe(blob => {
      let a = document.createElement("a");
      let url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = file.name;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
