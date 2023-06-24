import { TrashPageModule } from './modules/trash-page/trash-page.module'
import { EditNoteModule } from './modules/edit-note/edit-note.module'
import { NotesPageModule } from './modules/notes-page/notes-page.module';
import { NoteService } from './services/note/note.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NotesPageModule,
    EditNoteModule,
    TrashPageModule,
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
