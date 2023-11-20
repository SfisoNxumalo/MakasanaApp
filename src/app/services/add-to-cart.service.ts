import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor() { }

  Tcart = new BehaviorSubject<Map<String, Object>>(<>);
  cart = new BehaviorSubject<any>({});

  CartMap = new Map();

  AddToCart(data:any){

    // if(this.CartMap.has(data._id)){

    // }
    // else{

    // }
    
    this.CartMap.set(data._id, data)
    console.log(this.CartMap)
    // this.cart.next(data);
  }

  mShowCart(){
    return this.cart;
  }


}
