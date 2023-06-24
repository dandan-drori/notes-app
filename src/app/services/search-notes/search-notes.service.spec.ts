import { TestBed } from '@angular/core/testing';

import { SearchNotesService } from './search-notes.service';

describe('SearchNotesService', () => {
  let service: SearchNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
