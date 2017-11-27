import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private _route: Router,
    private _userService: UserService) {}

  ngOnInit() {
    this._userService.getCurrentUser(
      (user) => {
        console.log(this._userService.currentUser);
        //decide where to go
        if (!user) {
        //navigate to the dashboard
          this._route.navigateByUrl('/');
        }
      },
      console.log
    )
  }
}
