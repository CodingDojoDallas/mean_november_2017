import { Component, OnInit } from '@angular/core';
import { TaskService} from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task';
@Component({
  selector: 'app-task-show',
  templateUrl: './task-show.component.html',
  styleUrls: ['./task-show.component.css']
})
export class TaskShowComponent implements OnInit {
  task: Task;

  constructor(private _route: ActivatedRoute, private _taskService: TaskService ) { 
    this._route.paramMap.subscribe((params) =>{
        this.task = this._taskService.retrieveTask(params.get("id"));

    });
  }

  ngOnInit() {
  }

}
