import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

@Injectable()
export class UserService {
  currentUser: User;

  constructor(
    private _http: Http
  ) { }

  createUser(user: User, callback, errorback) {
    //this is how you access the node server to get to the routes and their methods.
    this._http.post('/users', user).subscribe(
      (res) => {
        const user = res.json();
        this.currentUser = user;
        callback(this.currentUser);
      },
      (err) => {
        errorback(err);
      }
    )
  }

  getCurrentUser(callback, errorback) {
    this._http.get('/sessions').subscribe(
      (res) => {
        const user = res.json();
        console.log(user);
        if (user) {
          this.currentUser = user;
        }
        callback(this.currentUser);
      },
      (err) => {
        errorback(err);
      }
    );
  }


  logout(callback, errorback) {
    this._http.delete('/sessions').subscribe(
      (res) => {
        this.currentUser = null;
        callback(res.json());
      },
      (err) => {
        errorback(err);
      }
    );
  }

}
