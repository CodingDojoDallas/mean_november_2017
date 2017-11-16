import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class GithubService {

  constructor(private _http: Http) {  }
  
  // getUserData(username: string) :void {
	// return new Promise((success,error)=>{
		// this._http.get(`https://api.github.com/users/${username}`).subscribe(
		// (response)=>{
			// success(response);
		// },
		// (errors)=>{
			// console.log("error!");
			// error(errors);
		// });
	// });
  // }
  
  // getUserData(username: string) {
	// return new Promise((success,error)=>{
		// this._http.get(`https://api.github.com/users/${username}`).subscribe(success,error);
	// });
  // }
  getUserData(username: string) {
		return this._http.get(`https://api.github.com/users/${username}`).toPromise()
  }
  
}
