import { TrashPageComponent } from './modules/trash-page/trash-page.component'
import { EditNoteComponent } from './modules/edit-note/edit-note.component'
import { NotesPageComponent } from './modules/notes-page/notes-page.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NotesPageComponent,
  },
  {
    path: 'trash',
    component: TrashPageComponent,
  },
  {
    path: ':noteId',
    component: EditNoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
