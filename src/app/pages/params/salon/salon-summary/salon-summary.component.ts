import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Salon } from 'src/app/models/salon';
import { SalonService } from 'src/app/services/salon.service';

@Component({
  selector: 'app-salon-summary',
  templateUrl: './salon-summary.component.html',
  styleUrls: ['./salon-summary.component.css']
})
export class SalonSummaryComponent implements OnInit {

  salon : Salon;

  constructor(
    private service : SalonService,
    private route : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.service.findById(params.get("id")).subscribe(data =>{
        this.salon = data;
      })
    });
  }

}
