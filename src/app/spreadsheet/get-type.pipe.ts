import { Pipe, PipeTransform } from '@angular/core';
import { Column, InputType } from './spreadsheet.component';

@Pipe({
  name: 'getType'
})
export class GetTypePipe implements PipeTransform {

  transform(value: string, columns: Column[]): InputType {
    const column = columns.find(c => c.propertyName === value);

    switch ( column.type ) {
      case 'number':
        return 'number';
      case 'date':
        return 'date';
      case 'select':
        return 'select';
      default:
        return 'string';
    }
  }

}
