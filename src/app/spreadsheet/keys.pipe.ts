import { Pipe, PipeTransform } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(formGroup: FormGroup): string[] {
    return Object.keys(formGroup.value);
  }

}
