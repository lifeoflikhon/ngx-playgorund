import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

export type InputType = 'text' | 'number' | 'date' | 'select';

export class SheetOption {
  id: number;
  name: string;
}

export class Column {
  label: string;
  propertyName: string;
  type?: InputType;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isSelected?: boolean;
  isDisable?: boolean;
  options?: SheetOption[];
}

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss']
})
export class SpreadsheetComponent implements OnInit {
  @Input() columns: Column[];
  @Input() rowCount: number;

  rows: FormArray = this._formBuilder.array([]);
  sheet: FormGroup = this._formBuilder.group({
    rows: this.rows
  });

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private _formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.generateRows();
  }

  generateRows() {
    for (let i = 0; i < this.rowCount; i++) {
      this.rows.push(this._formBuilder.group(this.buildControls()));
    }
  }

  submit() {
    this.sheet.markAllAsTouched();

    if ( this.sheet.valid ) {
      this.onSubmit.emit(this.sheet.value);
    }
  }

  buildControls() {
    const controls = {};
    this.columns.forEach(column => {
      controls[column.propertyName] = this._formBuilder.control('', this.setValidators(column));
    });
    return controls;
  }

  private setValidators( column: Column ) {
    const validators = [];
    column.isRequired && validators.push(Validators.required);
    return validators;
  }
}
