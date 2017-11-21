import { Injectable } from '@angular/core';
@Injectable()
export class TaskService {
 
  tasks = [];
 
  constructor() { }
 
  
 
  createTask(task){
    this.tasks.push(task);
  }
 
}
