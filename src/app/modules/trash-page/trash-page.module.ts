import { NavigationModule } from './../navigation/navigation.module'
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
    NavigationModule,
  ],
  exports: [
    TrashPageComponent,
  ]
})
export class TrashPageModule { }
