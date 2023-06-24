import { Observable, of } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/interfaces/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {
  @Input() notes: Note[] = [];
  @Input() searchInput$: Observable<string> = of('');
  @Output() deleteNote: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() lockNote: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() unlockNote: EventEmitter<Note> = new EventEmitter<Note>();

  onDeleteNote(noteToDelete: Note): void {
    this.deleteNote.emit(noteToDelete);
  }

  onLockNote(noteToLock: Note): void {
    this.lockNote.emit(noteToLock);
  }

  onUnlockNote(noteToUnlock: Note): void {
    this.unlockNote.emit(noteToUnlock);
  }
}
