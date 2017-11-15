import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FindUserService {
  constructor(private _http: Http) { }

  findUser(username) {
    return this._http.get(`http://api.github.com/users/${username}`);
  }
}
