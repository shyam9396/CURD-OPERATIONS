import { Component, OnInit } from '@angular/core';
import{Employee} from '../models/employee.model';

@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees:Employee[] = [

    
    {
      id:1,
      name:'Mark',
      gender:'Male',
      contactPreferences:'email',
      email:'abcdMark@gmail.com',
      phoneNumber:879546234,
      dateOfBirth: new Date('10/17/1983'),
      department:'IT',
      isActive:true,
      photoPath:'assets/images/emp-1.jpg'
    },
    {
      id:2,
      name:'Megha',
      gender:'Female',
      contactPreferences:'email',
      email:'meghaAbcd@gmail.com',
      phoneNumber:8954566712,
      dateOfBirth: new Date('02/07/1990'),
      department:'IT',
      isActive:true,
      photoPath:'assets/images/emp-2.jpg'
    },
    {
      id:1,
      name:'Alex',
      gender:'Female',
      contactPreferences:'email',
      email:'alexAbcd@gmail.com',
      phoneNumber:234567891,
      dateOfBirth: new Date('04/04/1992'),
      department:'IT',
      isActive:true,
      photoPath:'assets/images/emp-3.jpg'
    }


  ];
  constructor() { }

  ngOnInit() {
  }

}
