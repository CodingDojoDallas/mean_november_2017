import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from './../task.service';
import { Task } from '../task';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  constructor(private _taskService: TaskService){
    this.tasks = this._taskService.tasks;
  }


  ngOnInit() {

  }

}
