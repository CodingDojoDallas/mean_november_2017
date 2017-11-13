import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
