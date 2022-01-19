import { Pipe, PipeTransform } from '@angular/core';
import { Column, SheetOption } from './spreadsheet.component';

@Pipe({
  name: 'getOptions'
})
export class GetOptionsPipe implements PipeTransform {

  transform(value: string, columns: Column[]): SheetOption[] {
    const column = columns.find(c => c.propertyName === value);
    return column.options;
  }

}
