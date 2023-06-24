import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multilineNoteText'
})
export class MultilineNoteTextPipe implements PipeTransform {
  transform(noteText: string): string {
    return noteText.replaceAll("\\n", "\n");
  }
}
