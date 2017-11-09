import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
