import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FilterPipe } from '../../pipes/filter/filter.pipe';
import { NotesComponent } from './notes.component';
import { NoteModule } from '../note/note.module';
import { LetDirective } from '../../directives/let/let.directive';


@NgModule({
  declarations: [NotesComponent, FilterPipe, LetDirective],
  imports: [CommonModule, NoteModule],
  providers: [DatePipe],
  exports: [NotesComponent],
})
export class NotesModule { }
