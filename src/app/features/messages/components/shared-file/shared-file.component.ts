import { Component, Input, OnInit } from '@angular/core';
import { FileModel } from 'src/app/models/file';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-shared-file',
  templateUrl: './shared-file.component.html',
  styleUrls: ['./shared-file.component.css']
})
export class SharedFileComponent implements OnInit {

  @Input() file: FileModel;

  constructor(private fileService: FileService) { }

  ngOnInit(): void { }

  download = () => {
    this.fileService.download(this.file);
  }
}
