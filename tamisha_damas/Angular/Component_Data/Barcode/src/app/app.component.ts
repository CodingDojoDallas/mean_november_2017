import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = [
    'red','yellow','black','blue','green','grey','pink','purple',
  ];
  barcode = [];
  constructor(){
    this.fillBarcode()
  }
  fillBarcode() {
    for(var i = 0; i < 10; i++){
      this.barcode.push(this.colors[Math.floor(Math.random()* 7)+ 1]);
    }
  }
  generate() {
    this.barcode = [];
    this.fillBarcode()
  }

}
