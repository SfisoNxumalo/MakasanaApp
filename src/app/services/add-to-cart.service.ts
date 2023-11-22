import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor() { 
    const item = localStorage.getItem("cart") || "[]";
    this.cartt = JSON.parse(item) || []
    this.cart.next(this.cartt);

  }

  // Tcart = new BehaviorSubject<Map<String, Object>>();
  cart = new BehaviorSubject<any>([]);

  CartMap = new Map();
  cartt:any = []

  AddToCart(data:any){

    let product = {
      id:data._id,
      price:data.price,
      business:data.business._id,
      image:data.image,
      title:data.title
    }

    const item = localStorage.getItem("cart") || "[]";
    this.cartt = JSON.parse(item) || []

    this.cartt.push({
      id:data._id,
      details:product
    });

    localStorage.setItem("cart", JSON.stringify(this.cartt))
    

    this.cart.next(this.cartt);
  }

  mShowCart(){

    // const item = localStorage.getItem("cart") || "[]";
    // this.cart = JSON.parse(item) || []
    
    return this.cart;
  }


}
