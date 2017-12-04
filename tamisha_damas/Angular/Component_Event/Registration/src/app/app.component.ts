import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  lastUser = new User();
  title = 'Registration';
  user = new User();
  users = [];
  
  onSubmit(){
   this.users.push(this.user);
   // because we cleared out user infor upon submission we had to create this.lastUser to have their info appear in the hidden message upon submission.
   this.lastUser = this.user;
   this.user = new User();
   this.submitted = true;
  }
}
