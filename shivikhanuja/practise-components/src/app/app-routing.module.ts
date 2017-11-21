import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list/task-list.component';


const routes: Routes = [
    { path: 'tasks', component: TaskComponent, children: [
       { path: '', pathMatch: 'full', component: TaskListComponent }
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
