import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadsheetComponent } from './spreadsheet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KeysPipe } from './keys.pipe';
import { GetColumnPipe } from './get-column.pipe';



@NgModule( {
  declarations: [
    SpreadsheetComponent,
    KeysPipe,
    GetColumnPipe
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
