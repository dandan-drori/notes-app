import { AddNote } from './../../models/interfaces/addNote';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent {
  public noteTitle: string = '';
  public noteText: string = '';

  @Output() onAddNote: EventEmitter<AddNote> = new EventEmitter<AddNote>();

  addNote(): void {
    this.onAddNote.emit({ title: this.noteTitle, text: this.noteText });
  }
}
