import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-display-all-employees',
  templateUrl: './display-all-employees.component.html',
  styleUrls: ['./display-all-employees.component.css']
})
export class DisplayAllEmployeesComponent implements OnInit{

  employees:Employee[]=[];
  constructor(private employeeService:EmployeeService){} //DI

  ngOnInit(): void {
  this.employees =  this.employeeService.getAllEmployees(); // load data from service to local array
  }



}
