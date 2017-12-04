import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskNewComponent } from './task/task-new/task-new.component';
import { TaskShowComponent } from './task/task-show/task-show.component'; 


const routes: Routes = [
  //http://localhost:4200/tasks
    { path: 'tasks', component: TaskComponent, children: [
      //http://localhost:4200/tasks/
       { path: '', pathMatch: 'full', component: TaskListComponent },
       //http://localhost:4200/tasks/new
       { path: 'new', pathMatch: 'full', component: TaskNewComponent },

       { path: ':id', pathMatch: 'full', component: TaskShowComponent },
    ] }
    // { path: '/head', pathMatch: 'full', component: TaskComponent }
    // { path: '/tasks/:id', component: TaskComponent }
    // { path: '/tasks/new', component: TaskComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
