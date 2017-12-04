import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = [];
  constructor(private _taskService: TaskService) { }
    this.tasks = this._taskService.tasks;
  ngOnInit() {
  }

}
