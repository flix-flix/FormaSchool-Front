import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberUserPseudo } from 'src/app/models/member/memberPseudoUser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sender-profile',
  templateUrl: './sender-profile.component.html',
  styleUrls: ['./sender-profile.component.css']
})
export class SenderProfileComponent implements OnInit {
  env = environment;

  @Input() member: MemberUserPseudo;
  @Input() show: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // =========================================================================================

  /** Redirect to the private thread with this user */
  privateMsg() {
    // TODO right salon OR new private
    this.router.navigate(["/privateMessages/redirect"]);
  }

  video() {
    // TODO right salon OR new private
    alert("TODO: Video");
  }
}
