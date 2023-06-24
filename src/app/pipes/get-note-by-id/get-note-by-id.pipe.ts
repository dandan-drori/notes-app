import { Observable, catchError, of } from 'rxjs'
import { NoteService } from './../../services/note/note.service'
import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../../models/interfaces/note';

@Pipe({
  name: 'getNoteById'
})
export class GetNoteByIdPipe implements PipeTransform {

  constructor(private readonly noteService: NoteService) {
  }

  transform(noteId: string, noteType: 'notes' | 'trash'): Observable<Note> {
    return this.noteService.getNote(noteId, noteType).pipe(
      catchError((error) => {
        console.log('Failed to get note by ID. Verify that the ID given actually belongs to an existing note');
        return of(error);
      })
    );
  }
}
