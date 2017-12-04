import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  user: User;
  constructor(
    private _route: Router,
    private _userService: UserService //dependency injection: allows us to pull in  adifferent model or library into our class (so whenever we want to use the UserNewComponent we have access to the UserService)
  ) { }

  ngOnInit() {
    this.user = new User();

    if (this._userService.currentUser) {
      this._route.navigateByUrl('/dashboard');
    }
  }
  onSubmit(){
    this._userService.createUser(this.user,
      (user) => {
        //Navigate to the dashboard
        this._route.navigateByUrl('/dashboard');
      },
      (err) => {
        // shows an error
        console.log(err);
      }
    );
    this.user = new User();
  }

}
