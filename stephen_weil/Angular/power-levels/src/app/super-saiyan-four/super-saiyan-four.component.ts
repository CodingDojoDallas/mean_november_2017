import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './super-saiyan-four.component.html',
  styleUrls: ['./super-saiyan-four.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SuperSaiyanFourComponent implements OnInit {
  @Input() powerlevel;
  constructor() { }

  ngOnInit() {
  }

  over9() {
    const modified = this.powerlevel * 500;
    if (modified > 9000 && modified <= 20000) {
      return true;
    }
    else {
      return false;
    }
  }

  superlative() {
    const modified = this.powerlevel * 500;
    if (modified > 20000 && modified < 50000) {
      return true;
    }
    else {
      return false;
    }
  }

  theone() {
    const modified = this.powerlevel * 500;
    if (modified >= 50000) {
      return true;
    }
    else {
      return false;
    }
  }

}
