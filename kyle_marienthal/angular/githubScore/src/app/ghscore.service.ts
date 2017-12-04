import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GhscoreService {
  users = [];
  constructor(private _http: Http) {}

  retrieveUsers(callback, username) {
    this._http.get(`http://api.github.com/users/${username}`).subscribe(
      (response) => { callback(response.json())},
      (error) => { console.log(error); }
    );
  }


}
