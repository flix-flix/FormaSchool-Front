import { Component, Input, OnInit } from '@angular/core';
import { FileModel } from 'src/app/models/file';
import { FileService } from 'src/app/services/file.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shared-file',
  templateUrl: './shared-file.component.html',
  styleUrls: ['./shared-file.component.css']
})
export class SharedFileComponent implements OnInit {
  env = environment;

  @Input() file: FileModel;

  constructor(private fileService: FileService) { }

  ngOnInit(): void { }

  /** Download the file on the computer */
  download = () => this.fileService.download(this.file);
}
