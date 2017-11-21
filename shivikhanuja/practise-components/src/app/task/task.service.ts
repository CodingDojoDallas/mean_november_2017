import { Injectable } from '@angular/core';
@Injectable()
export class TaskService {
 
  tasks = [{id:1, name: 'Learn Angular'}, {id:2, name: 'Teach Angular'}];     //can predefine some values
 
  constructor() { }

  retrieveTask(id){
      for (let i = 0 , length=this.tasks.length; i < length; i++){
        if(id == this.tasks[i].id){
          return this.tasks[i];
        }
      }
      return new Task();
  }
 
  
 
  createTask(task, callback){
    this.tasks.push(task);

    callback();
  }
 
}
