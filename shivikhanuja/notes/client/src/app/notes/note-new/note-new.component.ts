import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  note: Note;

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
      this.note = new Note();
  }
  onSubmit() {
      this.setDates(this.note);
      this._noteService.createNote(this.note);

      this.note = new Note();
  }

  setDates(note){
    note.createdAt = note.updatedAt = new Date();
  }

}
