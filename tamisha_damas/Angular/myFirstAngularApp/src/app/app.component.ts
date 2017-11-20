import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num = 11;
  logNum(){
		console.log("num is: ", this.num);
	};
  numbers = [1,2,3,4,5];
  name = 'Bill Gates';
  loggedIn = true;
  user = {
    firstName: 'Darth',
    lastName: 'Vader'
  }
  color = 'red';
}
