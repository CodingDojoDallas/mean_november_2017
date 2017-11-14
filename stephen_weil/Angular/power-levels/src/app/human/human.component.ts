import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HumanComponent implements OnInit {
  @Input() powerlevel;
  constructor() { }

  ngOnInit() {
  }

}
