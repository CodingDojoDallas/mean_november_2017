import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Dojo Mail'
  mail = [
    {email: 'bill@gates.com', importance: true, subject: 'New Window', content:"Windows"},
    {email: 'bat@bat.com', importance: false, subject: 'PBJ time', content:"My novel I'm working on it."},
    {email: 'bill@bill.com', importance: true, subject: 'Never say never', content:"Whateva!"}
  ]
};
