import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
 
import { Injectable } from '@angular/core';
import { Products } from '../Interfaces/products';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = "http://localhost:2023/makasana-api/business/"

  constructor( private http: HttpClient){}

  // createProduct(id:string,title:string, image:string, price:string, description:string, 
  //   category:string, quantity:string, conduction:string) :Observable<any> {
  //   return this.http.post(`${this.api}create/${id}`,{title,image, price, description, category,
  //   quantity,conduction},httpOptions)
  // }
  
  // getProuctById(id:string):Observable<any>{
  //   return this.http.get(this.api+"getById/"+id,httpOptions)
  // }

  // updateProduct(id:string, title:string, image:string, price: string, description:string, 
  //   category:string,quantity:string,conduction:string):Observable<any>{
  //     return this.http.put(this.api+"update/"+id,{title, image, price, description,category,
  //     quantity,conduction}, httpOptions)
  // }

  // findAll(id:string):Observable<any>{
  //   return this.http.get(this.api+"findAll/"+id,httpOptions)
  // }
   Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTkxNDU0OTkwZDU3ZDkzNGFmNTE1YiIsImlhdCI6MTcwMDQ1NjUyOCwiZXhwIjoxNzAwNDc0NTI4fQ._G5BGL4VD3MwBUGzFM9Tna-aeWcZLx3y98dVvYXNws0";

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
    .append('content-type', 'application/json')

    return this.http.post(this.api + "create-product", body, {headers});

  }

    updateProduct(body:Products, id:any):Observable<any>{
      const headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + this.Token)
    .append('content-type', 'application/json')

      return this.http.put(this.api + "update/" + id, body, {headers})
  }


}
