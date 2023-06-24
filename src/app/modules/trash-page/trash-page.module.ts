import { RouterModule } from '@angular/router'
import { NoteModule } from './../note/note.module'
import { TrashPageComponent } from './trash-page.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    TrashPageComponent,
  ],
  imports: [
    CommonModule,
    NoteModule,
    RouterModule
  ],
  exports: [
    TrashPageComponent,
  ]
})
export class TrashPageModule { }
