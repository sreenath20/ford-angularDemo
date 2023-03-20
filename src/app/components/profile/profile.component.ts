import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/Employee';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  employee:Employee= new Employee();

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe(
      {
        next:(data)=>{
          console.log(data);  
          this.employee= data;

        },
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }

}
