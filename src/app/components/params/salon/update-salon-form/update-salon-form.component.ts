import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalonNameDesc } from 'src/app/models/salon/salonNameDesc';
import { SalonService } from 'src/app/services/salon.service';

@Component({
  selector: 'app-update-salon-form',
  templateUrl: './update-salon-form.component.html',
  styleUrls: ['./update-salon-form.component.css']
})
export class UpdateSalonFormComponent implements OnInit {

  salonUpdate: SalonNameDesc = new SalonNameDesc(" ", " ", " ");
  salonUpdateForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl('')
  });

  salonId: string;
  salon: SalonNameDesc;

  constructor(
    private service: SalonService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    let salonId: string;
    this.activatedRoute.parent.paramMap.subscribe(params => {
      salonId = params.get("salonId");
      this.service.findNameDescById(salonId).subscribe(salonUpdate => {
        this.salonUpdate = salonUpdate;
        this.salonUpdateForm = this.fb.group({
          name: this.salonUpdate.name,
          desc: this.salonUpdate.desc,
        })
      })
    });
  }

  ngOnInit(): void {
    this.activatedRoute.parent.paramMap.subscribe(params => {
      this.salonId = params.get("salonId");
    })
    this.service.findNameDescById(this.salonId).subscribe(salon => {
      this.salon = salon;
    })

  }
  updateSalon = (salonId) => {
    this.salonUpdate.name = this.salonUpdateForm.value.name;
    this.salonUpdate.desc = this.salonUpdateForm.value.desc;
    this.service.updateSalonNameDesc(this.salonUpdate).subscribe(salonUpdate => {
      this.salonUpdate = salonUpdate;
      const URL = `/params/salon/${salonId}/summary`;
      this.router.navigate([URL]);
    })
  }

}
