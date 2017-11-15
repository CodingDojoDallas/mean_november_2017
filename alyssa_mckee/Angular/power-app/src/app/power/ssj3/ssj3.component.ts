import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ssj3',
  templateUrl: './ssj3.component.html',
  styleUrls: ['./ssj3.component.css']
})
export class Ssj3Component implements OnInit, OnChanges {
  @Input() mypower :number;
  private _power :number;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges){
	console.log(changes);
	this._power = changes.mypower.currentValue.lv*250;	
  }
}