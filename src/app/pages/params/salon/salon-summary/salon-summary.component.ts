import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalonNameDesc } from 'src/app/features/params/salon/model/salonNameDesc';
import { SalonService } from 'src/app/features/team/services/salon.service';


@Component({
  selector: 'app-salon-summary',
  templateUrl: './salon-summary.component.html',
  styleUrls: ['./salon-summary.component.css']
})
export class SalonSummaryComponent implements OnInit {

  salon: SalonNameDesc;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      SalonService.findNameDescById(+params.get("id")).subscribe(data => {
        this.salon = data;
      })
    });

  }

}
