import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchNotesComponent } from './search-notes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchNotesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [SearchNotesComponent]
})
export class SearchNotesModule { }
