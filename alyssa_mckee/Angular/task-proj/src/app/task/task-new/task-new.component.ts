import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskNewComponent implements OnInit {
  task: Task;

  @Output() taskEventEmitter = new EventEmitter();

  constructor(private _taskService :TaskService) { 
	this.task = new Task();
  }
  
  ngOnInit() { }
  title = "New Task";
  
  onSubmit(event){
	event.preventDefault()
	
	this._taskService.createTask(this.task);
	//this.taskEventEmitter.emit(this.task)
	
	this.task = new Task();
  }
}
