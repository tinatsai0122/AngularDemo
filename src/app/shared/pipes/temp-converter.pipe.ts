import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter',
})
export class TempConverterPipe implements PipeTransform {
  transform(value: number, unit: string): number {
    switch (unit) {
      case 'celsius':
        return Math.round((value - 32) * (5 / 9));
      case 'fahrenheit':
        return Math.round(value * (9 / 5) + 32);
      default:
        return value;
    }
  }
}
