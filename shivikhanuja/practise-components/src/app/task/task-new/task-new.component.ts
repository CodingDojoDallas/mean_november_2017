import { Component, OnInit, Input} from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task'

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  task: Task;

  constructor(
    private _taskService: TaskService
  ){}

  ngOnInit() {
    this.task = new Task();
  }
  onSubmit (){
    this._taskService.createTask(
          this.task);

    this.task = new Task(); 
  }
}
