import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: Array<{ instanceType: string, name: string, status: string, started: Date }>, propName: string, order: string): any {
    return value.sort((a, b) => {
      switch (order) {
        case "A":
          return a[propName].localeCompare(b[propName])
        case "D":
          return -1*(a[propName].localeCompare(b[propName]))
        default:
          break;
      }
    });
  }
}