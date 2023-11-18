import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
 
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = "http://localhost:2023/product/"

  constructor( private http: HttpClient){}

  createProduct(id:string,title:string, image:string, price:string, description:string, 
    category:string, quantity:string, conduction:string) :Observable<any> {
    return this.http.post(`${this.api}create/${id}`,{title,image, price, description, category,
    quantity,conduction},httpOptions)

  }
  
  getProuctById(id:string):Observable<any>{
    return this.http.get(this.api+"getById/"+id,httpOptions)
  }

  updateProduct(id:string, title:string, image:string, price: string, description:string, 
    category:string,quantity:string,conduction:string):Observable<any>{
      return this.http.put(this.api+"update/"+id,{title, image, price, description,category,
      quantity,conduction}, httpOptions)
  }

  findAll(id:string):Observable<any>{
    return this.http.get(this.api+"findAll/"+id,httpOptions)
  }
}
