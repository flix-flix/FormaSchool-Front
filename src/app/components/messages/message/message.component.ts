import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EmojiDesc } from 'src/app/models/emoji/emojiDesc';
import { Member } from 'src/app/models/member/member';
import { MessageEdit } from 'src/app/models/messages/MessageEdit';
import { UserLocalStorage } from 'src/app/models/user/userLocalStorage';
import { MessageWsService } from 'src/app/services/message-ws.service';
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

  hideSelector = true;

  constructor(private wsService: MessageWsService) { }

  ngOnInit(): void { }

  // =========================================================================================
  // Display

  /** Return the text representaion of the time */
  getTimeStr = (): string => nf.format(this.msg.send.getHours()) + ":" + nf.format(this.msg.send.getMinutes());

  // =========================================================================================
  // Buttons

  /** Edit the message */
  editButton = () => {
    this.editable = true;
    this.editRef.nativeElement.innerText = this.editContent = this.msg.content;

    setTimeout(() => { // Wait for view refresh (ugly)
      this.editRef.nativeElement.focus()
    }, 50);
  }

  /** Delete the message */
  deleteButton = (event) => {
    if (confirm("Voulez vous supprimer ce message"))
      this.delete.emit(this.msg.id);
  }

  /** Open/Close the emoji selector */
  emoji = () => this.hideSelector = !this.hideSelector;

  // =========================================================================================
  // Edit

  /** Handle event [Escape] */
  pressEscape = (event) => this.editable = false;

  /** Handle event [Enter] */
  pressEnter = (event) => {
    event.preventDefault();
    if (this.editContent.length != 0)
      this.sendMsg();
  }

  /** Send message outside of this component */
  sendMsg = () => {
    if (this.editContent != this.msg.content)
      this.edit.emit({ id: this.msg.id, content: this.editContent });
    this.editable = false;
  }

  // =========================================================================================
  // Reactions

  /** Add the reaction to the message */
  addReaction(emoji: EmojiDesc) {
    this.wsService.react({ msgId: this.msg.id, memberId: this.member.id, emojiId: emoji.id, on: true });
    this.hideSelector = true;
  }
}

const nf = new Intl.NumberFormat("fr-FR", { minimumIntegerDigits: 2 });
