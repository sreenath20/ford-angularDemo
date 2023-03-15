import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeBackendService {

  constructor(private httpClient:HttpClient) { }

  addEmployee(newEmployee:Employee):Observable<any>{
    let url:string = "http://localhost:8090/v1/employee";
    return this.httpClient.post(url,newEmployee,{responseType:'json'});
  }
  deleteEmployeeById(id?:number):Observable<any>{
    return this.httpClient.delete("http://localhost:8090/v1/employee/"+id);
  }

  getAllEmployees():Observable<any>{
    return this.httpClient.get("http://localhost:8090/v1/employees");
  }
}
