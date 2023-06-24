import { RouterModule } from '@angular/router'
import { NoteComponent } from './note.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultilineNoteTextPipe } from '../../pipes/multiline-note-text/multiline-note-text.pipe';
import { HighlightMatchesPipe } from '../../pipes/highlight-matches/highlight-matches.pipe';


@NgModule({
  declarations: [NoteComponent, MultilineNoteTextPipe, HighlightMatchesPipe],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [NoteComponent]
})
export class NoteModule { }
