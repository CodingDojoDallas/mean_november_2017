import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SuperSaiyanComponent implements OnInit {
  @Input() powerlevel;
  constructor() { }

  ngOnInit() {
  }

}
