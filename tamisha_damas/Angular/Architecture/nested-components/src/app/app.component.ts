import { Component } from '@angular/core';
import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  stylesUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }
  // 5 Our dataFromChild function will be invoked, and with it we will retrieve the data emitted.
  dataFromChild(eventData){
    console.log(eventData);
  }
}
