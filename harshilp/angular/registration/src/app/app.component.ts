import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  users = [];
  success='no'
  submitted=true;

  submit() {
    this.success = 'yes';    
    this.submitted = true;
    this.users.push(this.user);
    this.user = new User();
  }
}
