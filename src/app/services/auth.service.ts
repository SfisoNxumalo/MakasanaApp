import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  business_api = "https://makasana-api.vercel.app/makasana-api/auth/business/"
  user_api = "https://makasana-api.vercel.app/makasana-api/auth/customer/"
  

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
