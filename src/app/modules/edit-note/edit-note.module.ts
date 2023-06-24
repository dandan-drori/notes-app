import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditNoteComponent } from './edit-note.component';
import { GetNoteByIdPipe } from '../../pipes/get-note-by-id/get-note-by-id.pipe';
import { RouterModule } from '@angular/router';
import { AutofocusDirective } from '../../directives/autofocus/autofocus.directive';


@NgModule({
  declarations: [
    EditNoteComponent,
    GetNoteByIdPipe,
    AutofocusDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    EditNoteComponent,
  ]
})
export class EditNoteModule { }
