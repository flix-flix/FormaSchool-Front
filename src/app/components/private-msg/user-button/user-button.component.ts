import { Component, Input, OnInit } from '@angular/core';
import { MemberUserNamePict } from 'src/app/models/member/memberUserNamePict';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css']
})
export class UserButtonComponent implements OnInit {
  env = environment;

  @Input() members: MemberUserNamePict[];
  @Input() salonId: string;
  @Input() displayed: string;

  member: MemberUserNamePict;

  constructor() { }

  ngOnInit(): void {
    if (this.members.length == 1)
      this.member = this.members[0];
  }
}
