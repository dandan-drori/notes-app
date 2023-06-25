import { NavigationModule } from './../navigation/navigation.module'
import { FormsModule } from '@angular/forms'
import { AddNoteModule } from './../add-note/add-note.module'
import { SearchNotesModule } from './../search-notes/search-notes.module'
import { NotesModule } from './../notes/notes.module'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesPageComponent } from './notes-page.component';


@NgModule({
  declarations: [
    NotesPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SearchNotesModule,
    NotesModule,
    AddNoteModule,
    NavigationModule,
  ],
  exports: [
    NotesPageComponent,
  ]
})
export class NotesPageModule { }
