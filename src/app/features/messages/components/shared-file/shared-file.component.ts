import { Component, Input, OnInit } from '@angular/core';
import { File } from 'src/app/models/file';

@Component({
  selector: 'app-shared-file',
  templateUrl: './shared-file.component.html',
  styleUrls: ['./shared-file.component.css']
})
export class SharedFileComponent implements OnInit {

  @Input() file: File;

  constructor() { }

  ngOnInit(): void { }


  download = () => {
    // TODO Download file
    alert("TODO download file");
  }
}
