import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon-template',
  templateUrl: './salon-template.component.html',
  styleUrls: ['./salon-template.component.css']
})
export class ParamsSalonTemplateComponent implements OnInit {

  buttons = [
    { link: "summary", text: "Resumé" },
    { link: "permissions", text: "Permissions" },
  ];
  // TODO [Improve] Redirect to actual salon
  previous = "/teamSelect";

  constructor() { }

  ngOnInit(): void {
  }
}
