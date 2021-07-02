import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Private } from 'src/app/models/private';
import { UserLocalStorage } from 'src/app/models/user/userLocalStorage';
import { PrivateMsgService } from 'src/app/services/private-msg.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-private-msg',
  templateUrl: './private-msg.component.html',
  styleUrls: ['./private-msg.component.css']
})
export class PrivateMsgComponent implements OnInit {

  user: UserLocalStorage;
  privates: Private[] = [];
  salonId: string;

  constructor(private activatedRoute: ActivatedRoute, private privateService: PrivateMsgService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.storageService.subscribe("user", user => this.user = user);

    this.activatedRoute.paramMap.subscribe(params => {
      this.salonId = params.get("salonId");

      this.privateService.findAllPrivateOfUser(this.user.id).subscribe(privates => {
        if (this.salonId == "redirect" && privates.length != 0) {
          // TODO [Improve] Redirect + url changes
          this.router.navigate(["privateMessages/" + privates[0].salon.id]);
          return;
        }
        this.privates = privates;
      });
    });
  }
}
