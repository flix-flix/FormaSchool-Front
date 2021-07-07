import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuButton } from 'src/app/models/_components/menu-button';

@Component({
  selector: 'app-menu-params',
  templateUrl: './menu-params.component.html',
  styleUrls: ['./menu-params.component.css']
})
export class MenuParamsComponent implements OnInit {

  @Input() buttons: MenuButton[];
  @Input() previous: string = "";

  current: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd)
        this.updateCurrent();
    });
    this.updateCurrent();
  }

  updateCurrent() {
    const url = this.router.url.split("/");
    this.current = url[url.length - 1];
  }
}
