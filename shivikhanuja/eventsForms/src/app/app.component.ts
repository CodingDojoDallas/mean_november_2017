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
    LastName: ''
  }


  onSubmit(){
    console.log("onSubmit()");
    console.log(this.user);
    // API (this.user)
    // this.users.push(this.user);
  }
}
