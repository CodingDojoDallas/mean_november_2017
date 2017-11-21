import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() tasks: Task[];

 

  constructor() { 

  }

  ngOnInit() {
      this.tasks = [];
  }

  createTask(event) {
    this.tasks.push(event);
  }

}
