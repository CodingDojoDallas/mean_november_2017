import { Injectable } from '@angular/core';
import { Task } from './task';
@Injectable()
export class TaskService {
  tasks :Task[] = [{name: "testing"}]
  constructor() { }

  retrieveTasks(){
	return this.tasks;
  }
  createTask(task){
	this.tasks.push(task);
  }
}
