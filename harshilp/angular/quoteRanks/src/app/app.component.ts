import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    {content:'Honki o misete miro', author:'Genji', votes:2},
    {content:'Are you a boy or girl?', author:'Prof. Oak', votes:10},
    {content:'Do a barrel roll', author:'Star Fox', votes:5}    
  ]

  create(quote) {
    this.quotes.push(quote)
  }

  delete(quote) {
    this.quotes.splice(this.quotes.indexOf(quote), 1);
  }
}
