import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  employee: Employee = { email: "", password: "" };

  constructor(private router: Router, private authService: AuthService) { }

  displayUserForm() {
    console.log("displayUserForm()");
    console.log(this.employee);
  }

  submitLoginForm() {
    console.log("submitLoginForm()");

    // if user is authorised navigate to home/dashboard page
    //if(this.employee.name=="ford" && this.employee.password=="ford1234")

    console.log(this.employee);

    this.authService.userLogin(this.employee).subscribe(
      {
        next:(data)=>{
          console.log(data);
          sessionStorage.setItem("user",JSON.stringify(data));
          console.log(data.jwt);
          sessionStorage.setItem("jwt",data.jwt);
          sessionStorage.setItem("role",data.role);
          
          //localStorage
          this.router.navigateByUrl("home");
        },
        error:(err)=>{
          console.log(err);
        }
      }
    );
    

  }
}
