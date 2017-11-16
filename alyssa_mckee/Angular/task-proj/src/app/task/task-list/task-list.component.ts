import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  // @Input() tasks: Task[];
  tasks: Task[] = [];
  
  constructor(private _taskService: TaskService) {
	this.tasks = this._taskService.tasks;
  }

  ngOnInit() { }
  title = "Task List";
}
