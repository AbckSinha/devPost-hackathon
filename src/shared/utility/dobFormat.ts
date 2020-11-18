import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dobFormatPipe',
})
export class DobformatPipe implements PipeTransform {
    transform(value: string): string {
        if (value && value !== null && value !== undefined) {
            const dd = value.substr(8, 2);
            const MM = value.substr(5, 2);
            const yyyy = value.substr(0, 4);
            const date = `${dd}/${MM}/${yyyy}`;

            return `${date}`;
        } else {
            return '';
        }

    }
}
