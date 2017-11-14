import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode';
  colors = (function(){
    const hex_digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    const colors = [];
    for (let k = 0; k < 10; k++) {
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += hex_digits[Math.floor(Math.random() * 16)];
      }
      colors.push(color);
    }
    return colors;
  })();
}
