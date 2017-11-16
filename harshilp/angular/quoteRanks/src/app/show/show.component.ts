import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShowComponent implements OnInit {
  @Input() quotes;
  @Output() deleteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  up(quote) {
    quote.votes++;
  }

  down(quote) {
    quote.votes--;
  }

  delete(quote) {
    this.deleteEvent.emit(quote);
  }
}
