import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalonNameDesc } from 'src/app/models/salon/salonNameDesc';
import { SalonService } from 'src/app/services/salon.service';


@Component({
  selector: 'app-salon-summary',
  templateUrl: './salon-summary.component.html',
  styleUrls: ['./salon-summary.component.css']
})
export class SalonSummaryComponent implements OnInit {

  salon: SalonNameDesc;

  constructor(
    private salonService: SalonService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.parent.paramMap.subscribe(params => { console.log(params.get("salonId")) })
    this.route.parent.paramMap.subscribe(params => {
      this.salonService.findNameDescById(+ params.get("salonId")).subscribe(data => {
        this.salon = data;
      })
    });
  }
}
