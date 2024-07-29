import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http:HttpClient,
    private token:TokenService) { }

    private products_api = "http://localhost:5500/makasana-api/business/"
    private orders_api = "http://localhost:5500/makasana-api/"
    private Token = this.token.getToken();

  mGetProductData():Observable<any>{

    const headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + this.Token)
    .append('content-type', 'application/json')

    return this.http.get(this.products_api + "my-products", {headers});
  }

  mGetOrderData():Observable<any>{
    const headers = new HttpHeaders()
      .append('Authorization', 'Bearer ' + this.Token)
      .append('content-type', 'application/json')
  
      return this.http.get(this.orders_api + "business/view-orders", {headers});
  
  }

  
}
