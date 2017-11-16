import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  today;
  timezone = '';
  change_color(tag) {
    const elems = document.getElementsByTagName('button');
    for (const el of elems) {
      el.style.backgroundColor = 'white';
    }
    if (tag !== '') {
      const el = document.getElementById(tag);
      el.style.backgroundColor = 'yellow';
    }
  }
  PST() {
    this.change_color('PST');
    this.today = new Date();
    this.timezone = 'PST';
  }
  MST() {
    this.change_color('MST');
    this.today = new Date();
    this.timezone = 'MST';
  }
  CST() {
    this.change_color('CST');
    this.today = new Date();
    this.timezone = 'CST';
  }
  EST() {
    this.change_color('EST');
    this.today = new Date();
    this.timezone = 'EST';
  }
  clear() {
    this.change_color('');
    this.today = '';
    this.timezone = '';
  }
}
