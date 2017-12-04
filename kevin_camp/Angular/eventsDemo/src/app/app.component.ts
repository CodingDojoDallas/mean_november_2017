import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	num: number = 1;

	logNum(){
		console.log('number is: ', this.num);
	}
}
