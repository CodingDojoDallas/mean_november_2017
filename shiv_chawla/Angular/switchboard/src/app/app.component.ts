import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  buttons : Array<Boolean>;

  constructor(){
    this.title = 'Switchboard'
  }

  switchColor(idx){
    console.log(idx)
    if (this.buttons[idx] == true){
      this.buttons[idx] = false;
    }
    else{
      this.buttons[idx] = true;
    }
    console.log(this.buttons[idx])
  }

  ngOnInit(){
    this.buttons = [true,false,true,false,true,false,true,false,true,false];
  }
}
