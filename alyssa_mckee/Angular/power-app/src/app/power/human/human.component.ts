import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit, OnChanges {
  @Input() mypower :number;
  private _power :number;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges){
	console.log(changes);
	this._power = changes.mypower.currentValue.lv * 1;	
  }
}
