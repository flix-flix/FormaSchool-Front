import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  styleColors = { display: "none" };

  header = "#4D729E";
  menu = "#7295BF";
  background = "#92BADE";
  font_1 = "#A2D0EA";
  font_2 = "#1E346D";

  constructor() { }

  ngOnInit(): void { }

  // ================================================================================================

  /** Change the color of the whole site (colors from ) */
  changeColor = () => {
    document.documentElement.style.setProperty('--_header', this.hexaToRGB(this.header));
    document.documentElement.style.setProperty('--_menu', this.hexaToRGB(this.menu));
    document.documentElement.style.setProperty('--_background', this.hexaToRGB(this.background));
    document.documentElement.style.setProperty('--_font_1', this.hexaToRGB(this.font_1));
    document.documentElement.style.setProperty('--_font_2', this.hexaToRGB(this.font_2));
  }

  /** Returns the colors as string: 'R, G, B' */
  hexaToRGB = (hexa: string): string => `${this.parse(hexa, 1)}, ${this.parse(hexa, 3)}, ${this.parse(hexa, 5)}`;

  /** Extract one bit from an ARGB string */
  parse = (str: string, index: number) => parseInt("0x" + str.substr(index, 2));

  // ================================================================================================

  openColors = (event) => {
    this.styleColors = { display: "block" };
  }

  closeColors = () => {
    this.styleColors = { display: "none" };
  }
}
