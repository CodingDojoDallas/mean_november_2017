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


  onSubmit() {
    
      this.users.push(this.user);
      this.user = {
        FirstName: '',
        LastName: ''
      }
   
    // API (this.user)
    // this.users.push(this.user);
  }
}
