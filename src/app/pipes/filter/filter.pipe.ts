import { DATE_FORMAT } from './../../config/note-date-format'
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'notesFilter' })
export class FilterPipe implements PipeTransform {
  constructor(private readonly datePipe: DatePipe) {}

  transform(items: any[], searchText: string | null): any[] {
    if (!items) return [];
    if (!searchText) return items;
    const searchRegex = new RegExp(searchText, 'ig');
    
    return items.filter((item) => {
      const titleMatch = searchRegex.test(item.title);
      const textMatch = searchRegex.test(item.text);
      const dateMatch = searchRegex.test(
        this.datePipe.transform(
          new Date(item.lastModified),
          DATE_FORMAT
        ) as string
      );
      return titleMatch || textMatch || dateMatch;
    });
  }
}
