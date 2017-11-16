import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SuperSaiyanTwoComponent implements OnInit {
  @Input() powerlevel;
  constructor() { }

  ngOnInit() {
  }

  over9() {
    const modified = this.powerlevel * 150;
    console.log(modified);
    if (modified > 9000 && modified <= 20000) {
      console.log('true');
      return true;
    }
    else {
      console.log('false');
      return false;
    }
  }

  superlative() {
    const modified = this.powerlevel * 150;
    if (modified > 20000 && modified < 50000) {
      return true;
    }
    else {
      return false;
    }
  }

  theone() {
    const modified = this.powerlevel * 150;
    if (modified >= 50000) {
      return true;
    }
    else {
      return false;
    }
  }

}
