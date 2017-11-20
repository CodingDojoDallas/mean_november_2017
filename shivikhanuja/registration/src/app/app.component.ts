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
  }


  onSubmit() {
    
      this.users.push(this.user);
      this.user = {
        FirstName: '',
        LastName: '',
        email:'',
        password:'',
        address:'',
        unit:'',
        city:''
      }
   
    // API (this.user)
    // this.users.push(this.user);
  }
}
