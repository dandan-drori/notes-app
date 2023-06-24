import { PasswordService } from './../../services/password/password.service';
import { AddNote } from './../../models/interfaces/addNote';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { SearchNotesService } from './../../services/search-notes/search-notes.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Note } from '../../models/interfaces/note';
import { NoteService } from '../../services/note/note.service';
import { InsertResult } from './../../models/interfaces/insertResult';
import { Settings } from './../../models/interfaces/settings';
import { SettingsService } from './../../services/settings/settings.service';
import { DEFAULT_NOTE } from './../../config/default-note';
import { DialogMethod } from './../../models/enums/dialogMethod';
import { DialogResponse } from './../../models/enums/dialogResponse';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss'],
})
export class NotesPageComponent {
  notes$: Observable<Note[]> = of([]);
  searchInput$: Observable<string> = of('');
  isPasswordDialogOpen$: Observable<boolean> = of(false);
  dialogMethodEnum = DialogMethod;
  password: string = '';
  dialogMethod: DialogMethod = DialogMethod.NO_ACTION;
  note: Note = DEFAULT_NOTE;
  notes: Note[] = [];

  @ViewChild('dialog') dialog: ElementRef<HTMLDialogElement> =
    {} as ElementRef<HTMLDialogElement>;

  constructor(
    private readonly searchNotesService: SearchNotesService,
    private readonly noteService: NoteService,
    private readonly settingsService: SettingsService,
    private readonly passwordService: PasswordService
  ) {}

  ngOnInit(): void {
    this.notes$ = this.noteService.getNotes();
    this.searchInput$ = this.searchNotesService.getSearchInput();
    this.isPasswordDialogOpen$ = this.passwordService.isPasswordDialogOpen$;
  }

  addNote({ title, text }: AddNote, notes: Note[]): void {
    const newNote: Note = {
      title,
      text,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      tags: [],
    };
    this.notes$ = this.noteService.addNote(newNote).pipe(
      map(({ insertedId }: InsertResult) => [
        ...notes,
        { ...newNote, _id: insertedId },
      ]),
      catchError(() => of(notes))
    );
  }

  deleteNote(noteToDelete: Note, notes: Note[]): void {
    if (noteToDelete.password) {
      this.openDialog(DialogMethod.DELETE, noteToDelete, notes);
      return;
    }
    this.deleteNoteWithoutPassword(noteToDelete, notes);
  }

  deleteNoteWithoutPassword(noteToDelete: Note, notes: Note[]): void {
    this.notes$ = this.noteService.deleteNote(noteToDelete).pipe(
      map(() => notes.filter((note: Note) => note._id !== noteToDelete._id)),
      catchError(() => of(notes))
    );
  }

  lockNote(noteToLock: Note, notes: Note[]): void {
    this.notes$ = this.settingsService.getSettings().pipe(
      switchMap((settings: Settings) => {
        const { mainPassword } = settings;
        return this.noteService.lockNote(noteToLock, mainPassword).pipe(
          map((lockedNote: Note) => {
            return notes.map((note) => {
              if (note._id === noteToLock._id) {
                return lockedNote;
              }
              return note;
            });
          }),
          catchError(() => of(notes))
        );
      }),
      catchError(() => of(notes))
    );
  }

  unlockNote(noteToUnlock: Note, notes: Note[]): void {
    if (!this.password.length) return;
    this.notes$ = this.noteService.unlockNote(noteToUnlock, this.password).pipe(
      map((isNoteUnlocked: boolean) => {
        if (isNoteUnlocked) {
          return notes.map((note) => {
            if (note._id === noteToUnlock._id) {
              delete note.password;
              return note;
            }
            return note;
          });
        } else {
          return notes;
        }
      }),
      catchError(() => of(notes))
    );
  }

  closeDialog() {
    if (this.dialog.nativeElement.returnValue === DialogResponse.OK) {
      if (this.dialogMethod === DialogMethod.UNLOCK) {
        this.unlockNote(this.note, this.notes);
      } else if (this.dialogMethod === DialogMethod.DELETE) {
        this.deleteNoteWithoutPassword(this.note, this.notes);
      }
    }
    this.password = '';
    this.dialogMethod = DialogMethod.NO_ACTION;
    this.passwordService.setIsPasswordDialogOpen(false);
    this.dialog.nativeElement.close(DialogResponse.CLOSE);
  }

  openDialog(dialogMethod: DialogMethod, note: Note, notes: Note[]) {
    this.dialogMethod = dialogMethod;
    this.note = note;
    this.notes = notes;
    this.passwordService.setIsPasswordDialogOpen(true);
    this.dialog.nativeElement.showModal();
  }
}
