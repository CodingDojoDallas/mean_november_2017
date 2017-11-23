import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {
  tasks = ['drink coffe or tea', 'build a web app']
  constructor(private _http: Http) { }

  retrieveTasks(){
    this._http.get('/tasks').subscribe(
      (response) => {console.log(response.json()); },
      (error) => {console.log(error); }
    )
    return this.tasks;
  }
  createTask(task){
    this.tasks.push(task);
  }
}
