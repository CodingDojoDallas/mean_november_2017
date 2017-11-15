import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors: string[];

  constructor() {
    this.colors = [];
    for (var y = 0; y < 10; y++) {
      let rn = (Math.floor(Math.random() * 6)) + 1;
      if (rn === 1) {
        this.colors.push('DarkSeaGreen');
      } else if (rn === 2) {
        this.colors.push('Fuchsia');
      } else if (rn === 3) {
        this.colors.push('MediumAquaMarine');
      } else if (rn === 4) {
        this.colors.push('DarkRed');
      } else if (rn === 5) {
        this.colors.push('Cyan');
      } else if (rn === 6) {
        this.colors.push('Indigo');
      }
    }
    console.log(this.colors)
  }


}
