import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadsheetComponent } from './spreadsheet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KeysPipe } from './keys.pipe';
import { GetTypePipe } from './get-type.pipe';
import { GetOptionsPipe } from './get-options.pipe';



@NgModule( {
  declarations: [
    SpreadsheetComponent,
    KeysPipe,
    GetTypePipe,
    GetOptionsPipe
  ],
  exports: [
    SpreadsheetComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SpreadsheetModule { }
