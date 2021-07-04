import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalonNameDesc } from 'src/app/models/salon/salonNameDesc';
import { SalonService } from 'src/app/services/salon.service';


@Component({
  selector: 'app-salon-summary',
  templateUrl: './salon-summary.component.html',
  styleUrls: ['./salon-summary.component.css']
})
export class SalonSummaryComponent implements OnInit {

  salon: SalonNameDesc;
  salonId: string;

  constructor(
    private salonService: SalonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.parent.paramMap.subscribe(params => {
      this.salonId = params.get("salonId");
      this.salonService.findNameDescById(this.salonId).subscribe(salon => {
        this.salon = salon;
      });
    });
  }

  salonUpdate = (salonId: string) => {
    const URL = `/params/salon/${salonId}/summaryUpdate`
    this.router.navigate([URL]);
  }
}
