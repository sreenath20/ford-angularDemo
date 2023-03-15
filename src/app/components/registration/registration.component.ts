import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/Employee';
import { EmployeeBackendService } from 'src/app/service/employee-backend.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  employee:Employee=new Employee();

  constructor(private employeeService:EmployeeService,private employeeBackEndService:EmployeeBackendService){}
  
  onSubmit(){
    console.log(this.employee);
    this.employeeService.addEmployee(this.employee);

    let empPost: Observable<any> =this.employeeBackEndService.addEmployee(this.employee);
    empPost.subscribe(
      {
        next:(data)=>{ // executes when back end reposnds with success status code
          console.log(data);
        },
        error:(error)=>{ // executes when back end responds with error status code
          console.log(error);
        },
        complete:()=>{ //
          console.log("Post request Completed...")
        }
      }
    )
  }

}
