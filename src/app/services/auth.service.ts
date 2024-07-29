import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private business_api = "http://localhost:5500/makasana-api/auth/business/"
  private user_api = "http://localhost:5500/makasana-api/auth/customer/"
  

  constructor(private http: HttpClient) { }

  mSignUp(body:any):Observable<any>{
    return this.http.post(this.business_api + "signup", body, httpOptions);
  }

  mSignIn(body:any):Observable<any>{
    return this.http.post(this.business_api + "signin", body, httpOptions);
  }

  mCSignUp(body:any):Observable<any>{
    return this.http.post(this.user_api + "signup", body, httpOptions);
  }

  mCSignIn(body:any):Observable<any> {
    return this.http.post(this.user_api + "signin", body, httpOptions);
  }
}
