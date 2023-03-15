import { Component, OnInit } from '@angular/core';
import { Employee } from './model/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "my-app";
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }


}
