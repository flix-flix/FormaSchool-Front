import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-with-preview',
  templateUrl: './upload-with-preview.component.html',
  styleUrls: ['./upload-with-preview.component.css']
})
export class UploadWithPreviewComponent implements OnInit {

  @Output() imageEvent = new EventEmitter<{}>();
  file: File;
  url;

  constructor() { }

  ngOnInit(): void {
  }

  onChange = ($event) => {
    this.file = $event.target.files[0]
    var reader = new FileReader();

    reader.onload = ($event: any) => {
      this.url = $event.target.result;
    };

    reader.onerror = ($event: any) => {
      console.log("File could not be read: " + $event.target.error.code);
    };

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
