import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  generateColor() :string {
	let choices :string[] = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
	let result :string = "#"
	for(let i :number = 0; i<6; i++){
		result+= choices[Math.floor(Math.random()*16)];
	}
	return result;
  }
  
  title = 'app';
  
}
