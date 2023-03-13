import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  employee: Employee = { name: "", password: "" };
  constructor(private router:Router){}

  displayUserForm(){
    console.log("displayUserForm()");
    console.log(this.employee);
  }

  submitLoginForm(){
    console.log("submitLoginForm()");
    
    // if user is authorised navigate to home/dashboard page
    if(this.employee.name=="ford" && this.employee.password=="ford1234")
      this.router.navigateByUrl("home");

  }
}
