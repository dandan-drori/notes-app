import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlightMatches'
})
export class HighlightMatchesPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(text: string, searchTerm: string): SafeHtml | string {
    if (!searchTerm?.length) return text;
    const regex = new RegExp(searchTerm, 'gi');
    const replacedValue = text.replace(regex, (match) => '<span style="font-weight: 900;">' + match + "</span>");
    return this.sanitizer.bypassSecurityTrustHtml(replacedValue);
  }

}
