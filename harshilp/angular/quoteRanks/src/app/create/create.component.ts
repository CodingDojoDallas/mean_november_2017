import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {
  @Input() quotes;
  @Output() createEvent = new EventEmitter();

  addQuote = {content:'', author:'', votes:0};

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.createEvent.emit(this.addQuote);
    this.addQuote = {content:'', author:'', votes:0}
  }
}
