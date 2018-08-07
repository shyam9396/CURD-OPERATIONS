import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;

  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'}
  ];
  constructor() {

    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY'
      });

  }
  public previewPhot = false;

  togglePhotoPreview() {
    this.previewPhot = !this.previewPhot;
  }

  ngOnInit() {
  }
  saveEmployee(empForm: NgForm): void {
    console.log(empForm);
  }

}
