import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor() { }

  // Tcart = new BehaviorSubject<Map<String, Object>>();
  cart = new BehaviorSubject<any>([]);

  CartMap = new Map();
  cartt:any = []

  AddToCart(data:any){
    this.cartt.push({
      id:data._id,
      details:data
    });

    this.cart.next(this.cartt);
  }

  mShowCart(){
    
    return this.cart;
  }


}
