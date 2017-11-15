import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ssj4',
  templateUrl: './ssj4.component.html',
  styleUrls: ['./ssj4.component.css']
})
export class Ssj4Component implements OnInit, OnChanges {
  @Input() mypower :number;
  private _power :number;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges){
	console.log(changes);
	this._power = changes.mypower.currentValue.lv*500;	
  }
}