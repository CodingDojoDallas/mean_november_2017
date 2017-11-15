import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
	emails = [
		{email: "kcamp4632@yahoo.com", importance: true, subject: "Alogrithms", content: "Every Morning" },
		{email: "bobvila@bobvila.com", importance: false, subject: "Python", content: "Ima snek" },
		{email: "bobafett@bobafett.com", importance: true, subject: "JavaScript", content: "Remember semi-colons"  },
		{email: "lilboy@lilboy.com", importance: false, subject: "Ruby", content: "Put a ring on tha finga" },
		{email: "gdkyle@gdkyle.com", importance: true, subject: "Mocha", content: "I love coffee" },
	]
}
