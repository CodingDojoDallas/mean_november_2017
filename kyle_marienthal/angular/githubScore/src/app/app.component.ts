import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { GhscoreService } from './ghscore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _http: Http, private _ghservice: GhscoreService){}
  username = {user:''}
  onSubmit(event){
    event.preventDefault();
    this._ghservice.retrieveUsers((username, callback)=>{console.log(username)})
    // console.log('yo what up dowwwwg') this works
    // visit git api
    // get info
    // return that info, to be displayed on html
    // this._http.get(`http://api.github.com/users/${username}`)
  }
}
