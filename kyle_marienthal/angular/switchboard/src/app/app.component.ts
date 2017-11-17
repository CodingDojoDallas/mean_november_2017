import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // switches = [true, true, true, true, true, true, true, true];
  // state: boolean = true;
     switch: boolean = true

     switches = [true, true, true, true, true, true, true, true, true, true];
     flipSwitch(idx) {
          this.switches[idx] = !this.switches[idx];
     }
}
