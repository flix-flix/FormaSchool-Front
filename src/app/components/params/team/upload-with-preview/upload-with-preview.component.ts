import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-with-preview',
  templateUrl: './upload-with-preview.component.html',
  styleUrls: ['./upload-with-preview.component.css']
})
export class UploadWithPreviewComponent implements OnInit {
  @ViewChild("fileInput") private fileInput: ElementRef;

  @Output() imageEvent = new EventEmitter<{}>();
  file: File;
  url;

  constructor() { }

  ngOnInit(): void {
  }

  // ================================================================================================

  setFileFromServer(file: string) {
    this.url = `${environment.apiUrl}/files/users/${file}`;
  }

  // ================================================================================================

  onChange = ($event) => {
    console.log("fileChanged");

    this.file = $event.target.files[0]
    var reader = new FileReader();

    reader.onload = ($event: any) => this.url = $event.target.result;
    reader.onerror = ($event: any) => console.log("File could not be read: " + $event.target.error.code);
    reader.readAsDataURL($event.target.files[0]);

    this.imageEvent.emit({
      file: this.file
    });
  }

  delete = () => {
    this.file = undefined;
    this.url = '';
    this.imageEvent.emit({
      file: null
    });
  }
}
