import { Component } from '@angular/core';
import { Employee } from 'src/app/model/Employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  employee: Employee = { id: 0, name: "", salary: 0 };
  displayUserForm(){
    console.log("displayUserForm()");
    console.log(this.employee);
  }
}
