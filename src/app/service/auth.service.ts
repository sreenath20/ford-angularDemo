import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Employee} from '../model/Employee'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  userLogin(employee:Employee):Observable<any>{
    return this.httpClient.post("http://localhost:8595/auth/login",employee,{responseType:'json'});
  }
  userLogout(){

  }
  getUserInfo():Observable<any>{

    let jwt = sessionStorage.getItem("jwt");

    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
   });
   return this.httpClient.get("http://localhost:8595/auth/userinfo", { headers: reqHeader })

  }
}
