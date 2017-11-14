import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
  user = {
    first: '',
    last: '',
    email: '',
    password: '',
    confirmation: '',
    address: '',
    unit: '',
    city: '',
    state: '',
    lucky: ''
  };
  on_submit() {
    let el = document.getElementById('success');
    let message = 'Thank you for registering with us ' + this.user.first + '. ';
    message += 'We just sent you a confirmation email at ' + this.user.email + ', ';
    message += 'and we will send all mail to ' + this.user.address;
    if (this.user.unit !== '') {
      message += ' ' + this.user.unit;
    }
    message += ', ' + this.user.city + ' ' + this.user.state + '.\n\nHave a wonderful day!';
    el.innerText = message;
    el.style.display = 'block';
    this.user = {
      first: '',
      last: '',
      email: '',
      password: '',
      confirmation: '',
      address: '',
      unit: '',
      city: '',
      state: '',
      lucky: ''
    };
  }
  check_valid() {
    return this.user.password !== this.user.confirmation;
  }
}
