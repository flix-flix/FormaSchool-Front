import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rights',
  templateUrl: './rights.component.html',
  styleUrls: ['./rights.component.css']
})
export class RightsComponent implements OnInit {

  @Input() right: { desc: string; value: boolean; }
  @Output() swapEvent = new EventEmitter<{}>();
  constructor() { }

  ngOnInit(): void {
  }

  boolHasChanged = () => {
    this.swapEvent.emit({
      value: this.right.value
    })
  }

}
