import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  power = {};
  newPower = {};
  constructor() { 
	this.newPower = {lv: 0}
  }

  ngOnInit() {
  }
  onSubmit(event){
	event.preventDefault();
	this.newPower = this.power;
	this.power = {};
  }
}
