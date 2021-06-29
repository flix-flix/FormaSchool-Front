import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Member } from 'src/app/models/member/member';
import { MessageEdit } from 'src/app/models/messages/MessageEdit';
import { UserLocalStorage } from 'src/app/models/user/userLocalStorage';
import { environment } from 'src/environments/environment';
import { Message } from '../../../models/messages/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, AfterViewInit {
  env = environment;
  @ViewChild("text") private text: ElementRef;

  @Output() msgEdit = new EventEmitter<MessageEdit>();
  @Output() delete = new EventEmitter();

  @Input() msg: Message;
  @Input() member: Member;

  user: UserLocalStorage = JSON.parse(localStorage.getItem("user"));

  editable = false;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.text.nativeElement.innerHTML = this.msg.html;
  }

  // =========================================================================================

  /** Open the emoji selector */
  emoji = () => {
    // TODO Emoji selector
    alert("TODO Emoji")
  }

  /** Edit the message */
  edit = () => {
    this.text.nativeElement.innerText = this.msg.content;
    this.editable = true;
    setTimeout(() => {
      this.text.nativeElement.focus()
    }, 50);
  }

  /** Delete the message */
  deleteClick = () => {
    if (confirm("Voulez vous supprimer ce message"))
      this.delete.emit(this.msg.id);
  }

  /** Open the options selector */
  other = () => {
    // TODO Open other option
    alert("TODO Other options")
  }

  /** Reply to the message */
  reply = () => {
    // TODO Reply to the message
    alert("TODO Reply")
  }

  // =========================================================================================
  // Edit

  pressEscape = (event) => {
    this.text.nativeElement.innerHTML = this.msg.html;
    this.editable = false;
  }

  pressEnter = (event) => {
    event.preventDefault();

    if (this.text.nativeElement.innerText.length != 0)
      this.sendMsg();
  }

  sendMsg = () => {
    this.msg.content = this.text.nativeElement.innerText;
    this.msg.html = Message.processHtml(this.msg.content);
    this.msg.processEmoji("");

    this.text.nativeElement.innerHTML = this.msg.html;

    this.msgEdit.emit({ id: this.msg.id, content: this.msg.content });
    this.editable = false;
  }
}
