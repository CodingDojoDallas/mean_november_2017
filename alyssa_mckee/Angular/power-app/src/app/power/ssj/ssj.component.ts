import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ssj',
  templateUrl: './ssj.component.html',
  styleUrls: ['./ssj.component.css']
})
export class SsjComponent implements OnInit, OnChanges {
  @Input() mypower :number;
  private _power :number;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges){
	console.log(changes);
	this._power = changes.mypower.currentValue.lv*90;	
  }
}