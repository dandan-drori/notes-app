import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchNotesService {
  private readonly searchInputSubject: BehaviorSubject<string> = new BehaviorSubject('');
  readonly searchInput$ = this.searchInputSubject.asObservable();

  getSearchInput() {
    return this.searchInput$;
  }

  setSearchInput(searchTerm: string) {
    this.searchInputSubject.next(searchTerm);
  }
}
