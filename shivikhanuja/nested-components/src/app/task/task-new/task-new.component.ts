import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task'
@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskNewComponent implements OnInit {
  task: Task

  @Output() createTaskEmitter = new EventEmitter();

  constructor() {
 
   }

  ngOnInit() {
    this.task = new Task();

  }
  onSubmit(event) {
      event.preventDefault();

      this.createTaskEmitter.emit(this.task);

      this.task = new Task();
  }

}
