import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Note } from './note';

@Injectable()
export class NoteService {
  notes: Note[] = [];
  constructor( private _http: Http) { }

  retrieveNotes(callback, errorback): void {
    // Make an http call to /notes to get all notes in db.
    this._http.get('/notes').subscribe(

      (res) => {
          this.notes = res.json()

          callback(this.notes);
      }, //Successful Observable
      (err) => {
          errorback(err);
      } //Unsuccessful Observable
    )
  }
  retrieveNote (){

  }
  createNote (note: Note, callback) {
      //Send note to server using http to store note in db.

      this._http.post('/notes', note).subscribe(
        (res) => {
          const note = res.json();
          this.notes.push(note);

          callback(note);
        }, //Successful Observable
        (err) => {
      
        } //Unsuccessful Observable //Successful Observable
      );
  }
  
}
