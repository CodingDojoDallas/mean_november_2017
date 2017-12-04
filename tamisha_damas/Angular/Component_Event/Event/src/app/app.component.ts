import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num: number = 1;

  lognum() {
    console.log('num is: ', this.num);
  }
}
