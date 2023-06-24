import { SearchNotesService } from './../../services/search-notes/search-notes.service'
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-notes',
  templateUrl: './search-notes.component.html',
  styleUrls: ['./search-notes.component.scss']
})
export class SearchNotesComponent {
  searchInput: string = '';

  constructor(private readonly searchNotesService: SearchNotesService) {
  }

  onSearch(searchTerm: string) {
    this.searchNotesService.setSearchInput(searchTerm);
  }
}
