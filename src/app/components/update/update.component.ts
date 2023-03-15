import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { EmployeeBackendService } from 'src/app/service/employee-backend.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  msg: string = "";
  errorMsg: string = "";

  id: string | null = "";
  employee: Employee = new Employee();

  constructor(private router:Router,private activatedRoute: ActivatedRoute, private empployeeService: EmployeeBackendService) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("update id:" + this.id);
    this.empployeeService.getEmployeeById(this.id).subscribe(

      {
        next: (data) => {
          this.employee = data;
          console.log(data);

        },
        error: (error) => {
          console.log(Error);

        }
      }

    )

  }

  updateEmployee(){
    console.log("Update emp:");
    console.log(this.employee);
    this.empployeeService.updateEmployee(this.employee).subscribe(
      {
        next:(data)=>{
          this.msg= "Employee updated successfully";
          this.errorMsg= "";
          this.router.navigateByUrl("employees");
        },
        error:(err)=>{
          console.log(err.error);
          this.msg= "";
          this.errorMsg= JSON.stringify(err.error);//"Employee could not be updated successfully";

        }
      }
    )
  }

}
