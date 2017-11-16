import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit {
  @Input() tasks: Task[];
  
  constructor() { 
  }

  ngOnInit() { 
	this.tasks = [];
  }
  title = "Tasks"
  
  createTask(event){
	this.tasks.push(event);
	console.log(this.tasks)
  }
}
