import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
      this.tasks = this._taskService.retrieveTasks();
  }

}
