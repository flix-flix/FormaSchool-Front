import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Member } from 'src/app/models/member/member';
import { MessageEdit } from 'src/app/models/messages/MessageEdit';
import { UserLocalStorage } from 'src/app/models/user/userLocalStorage';
import { Message } from '../../../models/messages/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @ViewChild('edit') private editRef: ElementRef;

  @Output() edit = new EventEmitter<MessageEdit>();
  @Output() delete = new EventEmitter();

  @Input() msg: Message;
  @Input() member: Member;

  user: UserLocalStorage = JSON.parse(localStorage.getItem("user"));

  editable = false;
  editContent = "";

  constructor() { }

  ngOnInit(): void { }

  // =========================================================================================
  // Display

  getTimeStr = (): string => nf.format(this.msg.send.getHours()) + ":" + nf.format(this.msg.send.getMinutes());

  // =========================================================================================
  // Buttons

  /** Edit the message */
  editButton = () => {
    this.editable = true;

    setTimeout(() => { // Wait for view refresh (ugly)
      this.editRef.nativeElement.innerText = this.editContent = this.msg.content;
      this.editRef.nativeElement.focus()
    }, 50);
  }

  /** Delete the message */
  deleteButton = () => {
    if (confirm("Voulez vous supprimer ce message"))
      this.delete.emit(this.msg.id);
  }

  /** Open the emoji selector */
  emoji = () => {
    // TODO Emoji selector
    alert("TODO Emoji")
  }

  // =========================================================================================
  // Edit

  pressEscape = (event) => this.editable = false;

  pressEnter = (event) => {
    event.preventDefault();

    if (this.editContent.length != 0)
      this.sendMsg();
  }

  sendMsg = () => {
    if (this.editContent != this.msg.content)
      this.edit.emit({ id: this.msg.id, content: this.editContent });
    this.editable = false;
  }
}

const nf = new Intl.NumberFormat("fr-FR", { minimumIntegerDigits: 2 });
