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
  fileUrl = "";

  hideSelector = true;
  caretStart = 5;
  caretEnd = 5;

  constructor() { }

  ngOnInit(): void {
  }

  // ====================================================================================================

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

  changeFile(event) {
    this.file = event.target.files[0];
    this.fileUrl = undefined;

    if (this.file.type.startsWith("image/")) {
      var reader = new FileReader();
      reader.onload = (event: any) => this.fileUrl = event.target.result
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  // ====================================================================================================
  // Emoji

  openCloseEmojiSelector = () => this.hideSelector = !this.hideSelector;

  addEmoji(emoji: string) {
    const elem = this.msgWriter.nativeElement;
    const text = `${elem.innerText.substring(0, this.caretStart)}:${emoji}:${elem.innerText.substring(this.caretEnd, elem.innerText.length)}`;
    this.msgWriter.nativeElement.innerText = text;
    this.content = text;
  }

  updateCaret(elem) {
    const win = elem.ownerDocument.defaultView;

    if (win.getSelection().rangeCount > 0) {
      const range = win.getSelection().getRangeAt(0);

      this.caretStart = range.startOffset;
      this.caretEnd = range.endOffset;
    }
  }
}
