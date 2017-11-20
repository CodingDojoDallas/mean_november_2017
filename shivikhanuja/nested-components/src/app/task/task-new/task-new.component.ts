import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task'
@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  task: Task

  @Output() taskEventEmitter = new EventEmitter();

  constructor() {
 
   }

  ngOnInit() {
    this.task = new Task();

  }
  onSubmit(event) {
    event.preventDefault();

    taskEventEmitter.emit(this.task);

    this.task= new Task();
  }

}
