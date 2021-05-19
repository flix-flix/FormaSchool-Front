import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-msg-writer',
  templateUrl: './msg-writer.component.html',
  styleUrls: ['./msg-writer.component.css']
})
export class MsgWriterComponent implements OnInit {

  @Output() msgEmit = new EventEmitter<string>();

  msgGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.msgGroup = fb.group({ msg: [""] });
  }

  ngOnInit(): void {
  }

  buttonJoinFile = () => {
    alert("TODO join file");
  }

  sendMsg = () => {
    this.msgEmit.emit(this.msgGroup.value.msg);
    this.msgGroup.controls["msg"].setValue("");
  }
}
