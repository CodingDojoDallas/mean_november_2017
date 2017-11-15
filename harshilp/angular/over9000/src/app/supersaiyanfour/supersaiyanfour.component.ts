import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyanfour',
  templateUrl: './supersaiyanfour.component.html',
  styleUrls: ['./supersaiyanfour.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SupersaiyanfourComponent implements OnInit, OnChanges {
  @Input() power;  
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.power = this.power*500;
  }
}
