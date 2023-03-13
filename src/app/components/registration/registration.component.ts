import { Component } from '@angular/core';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  employee:Employee=new Employee();

  constructor(private employeeService:EmployeeService){}
  
  onSubmit(){
    console.log(this.employee);
    this.employeeService.addEmployee(this.employee);

  }

}
