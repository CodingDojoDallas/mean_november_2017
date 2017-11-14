import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SuperSaiyanThreeComponent implements OnInit {
  @Input() powerlevel;
  constructor() { }

  ngOnInit() {
  }

  over9() {
    const modified = this.powerlevel * 250;
    if (modified > 9000 && modified <= 20000) {
      return true;
    }
    else {
      return false;
    }
  }

  superlative() {
    const modified = this.powerlevel * 250;
    if (modified > 20000 && modified < 50000) {
      return true;
    }
    else {
      return false;
    }
  }

  theone() {
    const modified = this.powerlevel * 250;
    if (modified >= 50000) {
      return true;
    }
    else {
      return false;
    }
  }

}
