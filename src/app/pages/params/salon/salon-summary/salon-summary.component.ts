import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-salon-summary',
  templateUrl: './salon-summary.component.html',
  styleUrls: ['./salon-summary.component.css']
})
export class SalonSummaryComponent implements OnInit {

  salon = { name: "General", desc: "Ciao" }

  constructor(

    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    /*   this.route.paramMap.subscribe(params => {
        this.service.findById(params.get("id")).subscribe(data => {
          this.salon = data;
        })
      });*/
  }

}
