import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable()
export class NoteService {
  notes: Note[] = [];
  constructor() { }

  retrieveNotes() {
    // Make an http call to /notes to get all notes in db.
    return this.notes;
  }
  retrieveNote (){

  }
  createNote (note: Note) {
      //Send note to server using http to store note in db.

      this.notes.push(note);
  }
}
