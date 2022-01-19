import { Pipe, PipeTransform } from '@angular/core';
import { Column, InputType } from './spreadsheet.component';

@Pipe({
  name: 'getColumn'
})
export class GetColumnPipe implements PipeTransform {

  transform(value: string, columns: Column[]): Column {
    return  columns.find(c => c.propertyName === value);
  }
}
