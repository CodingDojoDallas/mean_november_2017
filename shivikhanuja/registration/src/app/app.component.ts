import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users = [];
  user = {
    FirstName: '',
    LastName: '',
    email:'',
    password:'',
    address:'',
    unit:'',
    city:'',
    state:'',
    lucky: ''
  }
  states = ['Alaska','Texas','New york', 'California'];


  onSubmit() {
      console.log('here');
      this.users.push(this.user);
      this.user = {
        FirstName: '',
        LastName: '',
        email:'',
        password:'',
        address:'',
        unit:'',
        city:'',
        state:'',
        lucky: ''
      }
   
    // API (this.user)
    // this.users.push(this.user);
  }
}
