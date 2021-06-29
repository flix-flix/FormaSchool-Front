import { Injectable } from '@angular/core';
import { HeaderComponent } from '../components/global/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  header: HeaderComponent;

  constructor() { }

  register = (header: HeaderComponent) => this.header = header;

  setText = (text: string) => this.header.setText(text);
}
