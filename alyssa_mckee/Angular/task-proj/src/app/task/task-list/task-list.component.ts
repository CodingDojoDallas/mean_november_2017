import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Task } from '../task';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[];
  
  constructor() { }

  ngOnInit() { }
  title = "Task List";
}
