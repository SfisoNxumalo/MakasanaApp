import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CustProductsService {

  constructor( private http: HttpClient, private token:TokenService) { }

  Token = this.token.getToken();

  api = "https://makasana.shaper.co.za/makasana-api/products/"

  getProducts(category:any):Observable<any>{

    const headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + this.Token)
    .append('content-type', 'application/json')
    console.log(this.api+category)
    return this.http.get(this.api + category, {headers});
  }


  getOneProduct(id:any):Observable<any>{

    const headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + this.Token)
    .append('content-type', 'application/json')

    return this.http.get(this.api + "view-product/"+id, {headers});
  }
}
