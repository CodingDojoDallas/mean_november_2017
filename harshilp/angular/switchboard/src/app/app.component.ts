import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switchboard = [false, true, false, true, true, false, false, false, true, true];

  flip(index) {
    this.switchboard[index] = this.switchboard[index]? false : true;
  }
}
