import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeBackendService {

  constructor(private httpClient:HttpClient) { }

  getEmployeeById(id:string|null):Observable<any>{
    return this.httpClient.get("http://localhost:8090/v1/employee/"+id);
  }
  addEmployee(newEmployee:Employee):Observable<any>{
    let url:string = "http://localhost:8090/v1/employee";
    return this.httpClient.post(url,newEmployee,{responseType:'json'});
  }
  deleteEmployeeById(id?:number):Observable<any>{
    return this.httpClient.delete("http://localhost:8090/v1/employee/"+id);
  }
  updateEmployee(employee:Employee):Observable<any>{
    return this.httpClient.put("http://localhost:8090/v1/employee",employee);
  }
  getAllEmployees():Observable<any>{
    return this.httpClient.get("http://localhost:8090/v1/employees");
  }
}
