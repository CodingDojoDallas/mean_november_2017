import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  powerlevel: Number;
  output: Number;

  numbers = (function(){
    const range = [];
    for (var i = 100; i !== 0; i--) {
      range.push(i);
    }
    return range;
  })();
  
  calc_power() {
    this.output = this.powerlevel;
  }

  hacked() {
    let ret = true;
    if (this.powerlevel >= 1 && this.powerlevel <= 100) {
      ret = false;
    }
    return ret;
  }
}
