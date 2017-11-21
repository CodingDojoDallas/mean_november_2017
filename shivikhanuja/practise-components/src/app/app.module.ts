import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskNewComponent } from './task/task-new/task-new.component';
import { TaskService } from './task/task.service'; 



@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    TaskNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
