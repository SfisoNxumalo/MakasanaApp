import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  
@Injectable({
  providedIn: 'root'
})
export class UserService {
  api = "http://localhost:2023/app/"

  constructor(private http: HttpClient) { }
  signup(username: string, email: string, password: string, address:string,phoneNumber:string , roles:string): Observable<any> {
    return this.http.post(this.api + 'signup', {
      username, email, password, address, phoneNumber,roles
    },
    httpOptions);
   }
  register(username: string, industry:string, email: string, password: string, address:string,phoneNumber:string , roles:string): Observable<any> {
    return this.http.post(this.api + 'signup', {
      username, email, password,  industry, address, phoneNumber,roles
    },
    httpOptions);
   }
   signIn(email: string, password: string): Observable<any> {
    return this.http.post(this.api + 'signin', {
      email, password, 
    },httpOptions);}
}

