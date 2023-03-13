import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deatails',
  templateUrl: './deatails.component.html',
  styleUrls: ['./deatails.component.css']
})
export class DeatailsComponent implements OnInit{

  name?:string|null="";

constructor(private route:ActivatedRoute){}

  ngOnInit(): void {

    this.name=this.route.snapshot.paramMap.get("name");
    
    

  }

}
