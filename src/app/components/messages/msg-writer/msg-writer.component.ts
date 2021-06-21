import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MessageSend } from 'src/app/models/messages/messageSend';

@Component({
  selector: 'app-msg-writer',
  templateUrl: './msg-writer.component.html',
  styleUrls: ['./msg-writer.component.css']
})
export class MsgWriterComponent implements OnInit {
  @ViewChild("writer") private msgWriter: ElementRef;

  @Output() msgEmit = new EventEmitter<MessageSend>();

  file: File;
  content = "";

  constructor() { }

  ngOnInit(): void {
  }

  pressEnter = (event) => {
    event.preventDefault();
    if (this.content.length != 0 || this.file)
      this.sendMsg();
  }

  sendMsg = () => {
    this.msgEmit.emit({ content: this.content, file: this.file, fileName: this.file?.name });
    this.content = "";
    this.file = undefined;
    this.msgWriter.nativeElement.innerText = "";
  }

  openCloseEmojiSelector = () => {
    alert("TODO add emoji");
  }
}
