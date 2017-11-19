// these are the libraries that are included by default
import { Component } from '@angular/core';

// this is how the component page talks to the html and css pages and links them together
@Component({
// selector matches up with a specific tag on the index.html page
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// email importance subject content
export class AppComponent {
  title = 'the thunder dome, biotch'
  information : object[] = [
    {email: 'Kyle@grem.com', importance: false, subject:'phone in the toilet', content:'this is the content'},
    {email: 'Joy@grem.com', importance: false, subject:'makes for longer bathroom breaks', content:'this is the content'},
    {email: 'Gremgrem@grem.com', importance: true, subject:'rrraawwwr...dddDDDDDDDROP the BASS', content:'this is the content'}];
}
