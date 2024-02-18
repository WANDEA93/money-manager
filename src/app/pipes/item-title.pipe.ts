import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemTitle',
  standalone: true
})
export class ItemTitlePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    // Replace capital letters with spaces followed by the lowercase letter
    const spacedString = value.replace(/([A-Z])/g, ' $1');

    // Capitalize the first letter of each word
    return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
  }

}
