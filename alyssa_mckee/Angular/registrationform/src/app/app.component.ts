import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message :string = "";
  user :object = {};
  onSubmit(event) :void {
	event.preventDefault();
    //set message
	this.message = `Thank you for registering with us ${this.user.first_name}. We sent you a confirmation email at ${this.user.email}, 	and we will send all mail to ${this.user.address}, ${this.user.city} ${this.user.state}.`;
	this.user = {};
  }
}
