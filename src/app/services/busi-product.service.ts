import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
 
import { Injectable } from '@angular/core';
import { Products } from '../Interfaces/products';
import { TokenService } from './token.service';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = "https://makasana-api.vercel.app/makasana-api/business/"

  constructor( private http: HttpClient, private token:TokenService){}

   Token = this.token.getToken();

  getMyProducts():Observable<any>{

    const headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + this.Token)
    .append('content-type', 'application/json')

    return this.http.get(this.api + "my-products", {headers});
  }

  getOneProduct(id:any):Observable<any>{

    const headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + this.Token)
    .append('content-type', 'application/json')

    return this.http.get(this.api + "view-product/"+id, {headers});
  }

  mCreateProduct(body:any):Observable<any>{

    const headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + this.Token)
    // .append('content-type', 'application/json')
    .append('Accept', '*/*')
    // .append("content-type", "multipart/form-data")

    // console.log(body.get("title"))

    return this.http.post(this.api + "create-product", body, {headers});

  }

    updateProduct(body:Products, id:any):Observable<any>{
      const headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + this.Token)
    .append('content-type', 'application/json')

      return this.http.put(this.api + "update/" + id, body, {headers})
  }

  mCreateWebsite(body:any):Observable<any>{

    const headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + this.Token)
    .append('content-type', 'application/json')

    return this.http.post(this.api + "save-web", body, {headers})
  }

  mViewWebsite(params:any):Observable<any>{
    const headers = new HttpHeaders()
    // .append('Authorization', 'Bearer ' + this.Token)
    .append('content-type', 'application/json')

    return this.http.get(this.api + "website/" + params, {headers})

  }


}
