import { Component, Input, OnInit } from '@angular/core';
import { MemberUserNamePict } from 'src/app/models/member/memberUserNamePict';
import { Private } from 'src/app/models/private';
import { UserLocalStorage } from 'src/app/models/user/userLocalStorage';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-private-menu',
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.css']
})
export class PrivateMenuComponent implements OnInit {

  @Input() privates: Private[];
  @Input() salonId: string;

  user: UserLocalStorage;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.storageService.subscribe("user", user => this.user = user);
  }

  /** Returns the list of members except the current user */
  getMembers(members: MemberUserNamePict[]): MemberUserNamePict[] {
    return members.filter(member => member.user.id != this.user.id);
  }
}
