import { Component } from '@angular/core';
import { Employee } from 'src/app/model/Employee';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  
  title = 'Online Mobile Application';
  date: Date = new Date();
  imageSrc: string = "../assets/images/disny.jpg";

  name: string = "Ford";
  password: string = "";
  isVisible: boolean = true;
  a: number = 15;
  b: number = 10;

  x: number = 0.259;
  y: number = 1.3495;
  pi: number = 3.14159265359;
  stringChoice = "D";
  

  countryNames = ["India", "USA", "UK"];

  employees: { id: number, name: string, salary: number }[] = [
    { id: 1, name: "Arjun", salary: 1500.0 },
    { id: 2, name: "Elakiya", salary: 1000.0 },
    { id: 3, name: "Varshini", salary: 2500.0 }
  ]
  query:string="";

  employee: Employee = { id: 0, name: "", salary: 0 };

  greetUser(): void {
    console.log("Welcome user");
  }
  displayName(): void {
    // window.alert(this.name +":"+this.password);
    console.log(this.name + this.password);
    //return; // to exit function with out any value 
  }
  displayUserForm(){
    console.log("displayUserForm()");
    console.log(this.employee);
  }

}
