import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ssj2',
  templateUrl: './ssj2.component.html',
  styleUrls: ['./ssj2.component.css']
})
export class Ssj2Component implements OnInit, OnChanges {
  @Input() mypower :number;
  private _power :number;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges){
	console.log(changes);
	this._power = changes.mypower.currentValue.lv*150;	
  }
}