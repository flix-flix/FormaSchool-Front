import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Log } from 'src/app/features/params/team/logs/models/log';
import { userCreation } from 'src/app/models/userCreation';
import { LogService } from 'src/app/services/log.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private logService: LogService) {
    this.userForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      password: [''],
      email: [''],
      picture: ['']
    })
  }

  ngOnInit(): void {

  }

  /**
   * This function allows us to save a user
   */
  save = () => {
    let user: userCreation = this.userForm.value;
    let retour: number;
    this.userService.save(user).subscribe(idRetour => {
      retour = idRetour;
    });
    this.logService.addLog(new Log(1, 8, 0, new Date(), `a creer l'utilisateur ${user.firstname} ${user.lastname}`));
    alert(`L'utilisateur a bien été créé avec l'id ${retour}`)
  }

}
