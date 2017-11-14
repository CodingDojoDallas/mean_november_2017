import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote_count = 1;
  quote = {
    author: '',
    content: '',
    votes: 0,
    id: this.quote_count
  };
  quotes = [];

  send_quote() {
    this.quotes.push(this.quote);
    this.quote_count++;
    this.quote = {
      author: '',
      content: '',
      votes: 0,
      id: this.quote_count
    };
    this.sort_quotes();
  }

  sort_quotes() {
    for (let i = 0, len = this.quotes.length; i !== len; i++) {
      const max = this.quotes[i].votes;
      let idx = i;
      for (let k = i + 1; k !== len; k++) {
        if (this.quotes[k].votes > max) {
          idx = k;
        }
      }
      if (idx !== i) {
        const temp = this.quotes[i];
        this.quotes[i] = this.quotes[idx];
        this.quotes[idx] = temp;
      }
    }
  }

  vote(quote_id, dir) {
    for (let i = 0, len = this.quotes.length; i < len; i++) {
      if (this.quotes[i].id === quote_id) {
        if (dir === 'up') {
          this.quotes[i].votes++;
        }
        else if (dir === 'down') {
          this.quotes[i].votes--;
        }
        break;
      }
    }
    this.sort_quotes();
  }

  delete(quote_id) {
    for (let i = 0, len = this.quotes.length; i < len; i++) {
      if (this.quotes[i].id === quote_id) {
        this.quotes.splice(i, 1);
        break;
      }
    }
  }

}
