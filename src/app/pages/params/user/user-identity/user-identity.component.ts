import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UploadWithPreviewComponent } from 'src/app/components/params/team/upload-with-preview/upload-with-preview.component';
import { UserSettings } from 'src/app/models/user/userSettings';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-identity',
  templateUrl: './user-identity.component.html',
  styleUrls: ['./user-identity.component.css']
})
export class UserIdentityComponent implements OnInit {
  @ViewChild("img") private img: UploadWithPreviewComponent;

  userId: string;

  userProfile: FormGroup;
  file: File;

  constructor(private fb: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute, private messageService: MessageService) {
    this.userProfile = this.fb.group({
      firstname: [''],
      lastname: [''],
      birth: [undefined],
      email: [''],
      phone: [''],
    })
  }

  ngOnInit(): void {
    this.activatedRoute.parent.paramMap.subscribe(params => {
      this.userId = params.get("userId");
      this.userService.findSettingsById(this.userId).subscribe(settings => {
        settings.birth = new Date(settings.birth[0], settings.birth[1] - 1, settings.birth[2] + 1);

        if (settings.picture != null)
          this.img.setFileFromServer(settings.picture);
        this.userProfile.patchValue({ ...settings })
      });
    });
  }

  /** Send the modifications to the server */
  save = () => {
    let user: UserSettings = this.userProfile.value;
    user.id = this.userId;
    this.userService.updateSettings(user).subscribe(user => {
      // TODO [Improve] handle error
      this.messageService.add({ severity: 'success', summary: 'Sauvegarde terminée', detail: 'Le profil à été mis à jour' })
    });
  }

  /** File changes */
  imgEvent = (element) => {
    this.file = element.file;
  }
}