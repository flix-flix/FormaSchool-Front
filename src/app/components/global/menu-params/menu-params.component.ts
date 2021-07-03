import { Component, Input, OnInit } from '@angular/core';
import { MenuButton } from 'src/app/models/_components/menu-button';

@Component({
  selector: 'app-menu-params',
  templateUrl: './menu-params.component.html',
  styleUrls: ['./menu-params.component.css']
})
export class MenuParamsComponent implements OnInit {

  @Input() buttons: MenuButton[];
  @Input() previous: string = "";

  constructor() { }

  ngOnInit(): void {
  }
}
