import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private api = "http://localhost:5500/makasana-api/business/"

  constructor( private http: HttpClient, private token:TokenService){}

  private Token = this.token.getToken();

 getMyNotifications():Observable<any>{

   const headers = new HttpHeaders()
   .append('Authorization', 'Bearer ' + this.Token)
   .append('content-type', 'application/json')

   return this.http.get(this.api + "notifications", {headers});
 }
}
