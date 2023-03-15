import { Injectable, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit{

  employees:Employee[]=[]; // its not permanent

  constructor() { 
    this.employees.push(new Employee(1,"Ford",25000.0));
    this.employees.push(new Employee(3,"Kumar",1000.0));
    this.employees.push(new Employee(5,"Amit",2000.0));
    this.employees.push(new Employee(2,"India",5000.0));
    
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  //CRUD
  getAllEmployees():Employee[]{
    return this.employees;
  }
  addEmployee(newEmployee:Employee):void{

    this.employees.push(newEmployee);
  }


}
