import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformatPipe',
})
export class DateformatPipe implements PipeTransform {
  transform(value: string): string {
    const dd = value.substr(3, 2);
    const MM = value.substr(0, 2);
    const yyyy = value.substr(6, 4);
    const date = `${dd}/${MM}/${yyyy}`;

    return `${date}`;
  }
}
