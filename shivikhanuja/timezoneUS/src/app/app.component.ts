import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    datetime: Date;
    currentTimeZone: string;
    timezones: string[];
    buttons: boolean[];

    constructor() {
      this.datetime = new Date();
      this.timezones = ['PST', 'MST', 'CST', 'EST'];
      this.buttons = [false, false, false, false];
    }
    setTimezone(timezone: string): void {
      this.currentTimezone = timezone;
      if (timezone =='PST'){
        this.buttons = [true, false, false, false];
      }
      else if (timezone =='MST'){
        this.buttons = [false, true, false, false];
      }
      else if (timezone =='CST'){
        this.buttons = [false, false, true, false];
      }
      else if (timezone =='EST'){
        this.buttons = [false, false, false, true];
      }

    }
    clear() {
      this.currentTimeZone = "";
    }
}
