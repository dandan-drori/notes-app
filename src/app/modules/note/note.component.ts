import { DEFAULT_NOTE } from '../../config/default-note';
import { DATE_FORMAT } from '../../config/note-date-format';
import { Note } from './../../models/interfaces/note'
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  public editNotePath: string[] | null = null;
  public dateFormat: string = DATE_FORMAT;

    @Input() note: Note = DEFAULT_NOTE;
    @Input() noteType: 'notes' | 'trash' = 'notes';
    @Input() searchInput: string = '';
    @Output() delete: EventEmitter<Note> = new EventEmitter<Note>();
    @Output() restore: EventEmitter<Note> = new EventEmitter<Note>();
    @Output() lock: EventEmitter<Note> = new EventEmitter<Note>();
    @Output() unlock: EventEmitter<Note> = new EventEmitter<Note>();


    ngOnInit(): void {
      this.editNotePath = this.noteType === 'notes' ? ['./' + this.note._id] : null;
    }

    deleteNote(): void {
      this.delete.emit(this.note);
    }

    restoreNote(): void {
      this.restore.emit(this.note);
    }

    lockNote(): void {
      this.lock.emit(this.note);
    }

    unlockNote(): void {
      this.unlock.emit(this.note);
    }
}
