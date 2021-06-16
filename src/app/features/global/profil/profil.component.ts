import { Component, OnInit } from '@angular/core';
import { UserNamePict } from 'src/app/models/user/userNamePict';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user: UserNamePict;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.storageService.changes.subscribe(() => this.user = JSON.parse(localStorage.getItem("user")));
  }

  openUserParams = () => {
    alert("TODO userParams");
  }
}
