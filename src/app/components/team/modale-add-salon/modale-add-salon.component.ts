import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modale-add-salon',
  templateUrl: './modale-add-salon.component.html',
  styleUrls: ['./modale-add-salon.component.css']
})
export class ModaleAddSalonComponent implements OnInit {

  form: FormGroup;
  displayDialog = false;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({ name: "", desc: "" });
  }

  ngOnInit(): void {
  }

  openAddSalon() {
    this.displayDialog = !this.displayDialog;
  }

  addSalon() {
    console.log("TODO", this.form.value);
    this.displayDialog = false;
    this.form.reset();
  }
}
