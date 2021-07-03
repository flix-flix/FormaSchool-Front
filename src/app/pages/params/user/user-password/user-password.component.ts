import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.css']
})
export class UserPasswordComponent implements OnInit {
  userId: string;

  passwordForm: FormGroup;

  constructor(fb: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute, private messageService: MessageService) {
    this.passwordForm = fb.group({
      password: '',
      passwordNew1: '',
      passwordNew2: ['', [Validators.required]],
    },
      { validators: this.validatePass }
    );
  }

  ngOnInit(): void {
    this.activatedRoute.parent.paramMap.subscribe(params => this.userId = params.get("userId"));
  }

  updatePassword() {
    const dto = { id: this.userId, password: this.passwordForm.value.password, passwordNew: this.passwordForm.value.passwordNew1 };
    this.userService.updatePassword(dto).subscribe(resp => {
      if (resp == null)
        this.messageService.add({ severity: 'error', summary: 'Non modifié', detail: 'Le mot de passe est incorrect' })
      else
        this.messageService.add({ severity: 'success', summary: 'Modifié', detail: 'Le mot de passe a bien été changé' })
    });
  }

  validatePass = (group) => group.value.passwordNew1 == group.value.passwordNew2 && group.value.passwordNew2 != "" ? null : { notSame: true };
}
