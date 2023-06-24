import { Note } from './../../models/interfaces/note'
import { of, Observable, map, catchError } from 'rxjs';
import { NoteService } from './../../services/note/note.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trash-page',
  templateUrl: './trash-page.component.html',
  styleUrls: ['./trash-page.component.scss']
})
export class TrashPageComponent implements OnInit {
  trashNotes$: Observable<Note[]> = of([]);
  noteType: 'notes' | 'trash' = 'trash';

  constructor(private readonly noteService: NoteService) {
  }

  ngOnInit(): void {
    this.trashNotes$ = this.noteService.getNotes('trash');
  }

  emptyTrash() {
    this.noteService.emptyTrash().subscribe(() => {
      this.trashNotes$ = of([]);
    });
  }

  onDeleteNote(noteToDelete: Note, trashNotes: Note[]): void {
    this.trashNotes$ = this.noteService.deleteNote(noteToDelete, 'trash').pipe(
      map(() => trashNotes.filter((note: Note) => note._id !== noteToDelete._id)),
      catchError(() => of(trashNotes))
    );
  }

  onRestoreNote(noteToRestore: Note, trashNotes: Note[]): void {
    this.trashNotes$ = this.noteService.restoreNote(noteToRestore).pipe(
      map(() => trashNotes.filter((note: Note) => note._id !== noteToRestore._id)),
      catchError(() => of(trashNotes))
    );
  }
}
