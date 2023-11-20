import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustProductsService {

  constructor( private http: HttpClient) { }

  api = "http://localhost:2023/makasana-api/products/"

  getProducts(category:any):Observable<any>{

    const headers = new HttpHeaders()
    // .append('Authorization', 'Bearer ' + this.Token)
    .append('content-type', 'application/json')
    console.log(this.api+category)
    return this.http.get(this.api + category, {headers});
  }


  getOneProduct(id:any):Observable<any>{

    const headers = new HttpHeaders()
    // .append('Authorization', 'Bearer ' + this.Token)
    .append('content-type', 'application/json')

    return this.http.get(this.api + "view-product/"+id, {headers});
  }
}
