import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNoteComponent } from './add-note.component';


@NgModule({
  declarations: [
    AddNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AddNoteComponent,
  ]
})
export class AddNoteModule { }
