import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  stylesUrls: ['./task.component.html']
})
export class TaskComponent {
  @Input() myTasks: Task[];
  // 1 Create an Event in the TaskComponent
  @Output() aTaskEventEmitter = new EventEmitter();
  constructor() { }
  triggerEvent(){
       //  3 Emit the Event
    aTaskEventEmitter.emit(7); //we can pass in any data type
  }
}
