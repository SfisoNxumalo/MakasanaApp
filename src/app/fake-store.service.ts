import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endpoint = "https://fakestoreapi.com/";

@Injectable({
  providedIn: 'root'
})


export class FakeStoreService {

  constructor(private httpclient: HttpClient) { }

  mGetProducts(){
    return this.httpclient.get(endpoint + "products")
  }

  mGetSelectedProduct(id:any){
    return this.httpclient.get(endpoint + "products/" + `${id}`)
  }
}