import { Component } from '@angular/core';
import { Column } from './spreadsheet/spreadsheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-playground';
  columns: Column[] = [
    {
      label: 'Name',
      propertyName: 'name',
      type: 'string',
      isRequired: true,
    },
    {
      label: 'Age',
      propertyName: 'age',
      type: 'number',
    },
    {
      label: 'Date of Birth',
      propertyName: 'dateOfBirth',
      type: 'date',
    },
    {
      label: 'Gender',
      propertyName: 'genderId',
      type: 'select',
      isRequired: true,
      options: [
        {
          id: 1,
          name: 'Male'
        },
        {
          id: 2,
          name: 'Female'
        },
        {
          id: 3,
          name: 'Others'
        },
      ]
    },
    {
      label: 'Class',
      propertyName: 'classId',
      type: 'select',
      options: [
        {
          id: 1,
          name: 'Class 1'
        },
        {
          id: 2,
          name: 'Class 2'
        },
        {
          id: 3,
          name: 'Class 3'
        },
      ]
    },
  ];

  submit( $event: any ) {
    console.log( $event );
  }
}
