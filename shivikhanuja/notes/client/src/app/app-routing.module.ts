import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesComponent } from './notes/notes.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { NoteNewComponent } from './notes/note-new/note-new.component';


const routes: Routes = [
    //http://localhost:6789/
    { path: '', component: NoteListComponent },
    { path: 'note', component: NotesComponent, children: [
        //http://localhost:6789/note
        { path: '', component: NoteListComponent }, 
        //http://localhost:6789/note/new
        { path: 'new', component: NoteNewComponent },  
    ]}

];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})

export class AppRoutingModule { }

