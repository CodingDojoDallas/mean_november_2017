import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks = [{name: 'Learn Angular'}, {name: 'Teach Angular'}];

  constructor() { }

  retrieveTasks() {
    return this.tasks;
  }

  createTask (task) {
      this.tasks.push(task);

      console.log(this.tasks);
  }


}
