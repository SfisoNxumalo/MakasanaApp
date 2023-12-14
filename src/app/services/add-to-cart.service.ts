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
  FinalOrder = new BehaviorSubject<any>([]);

  CartMap = new Map();
  cartt:any = []

  AddToCart(data:any){

    let price = data.price;

    if(data.promo){
      if(data.promo.onPromo ){
     price = data.promo.newPrice
    }
    }
    
    

    let product = {
      id:data._id,
      price:price,
      business:data.business._id,
      image:data.image,
      title:data.title,
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

  RemoveFromCart(data:any){

    let product = {
      id:data._id,
      price:data.price,
      business:data.business._id,
      image:data.image,
      title:data.title
    }

    const item = localStorage.getItem("cart") || "[]";
    this.cartt = JSON.parse(item) || []

    const newCart = []

    let Found = false;

    for(let a_product of this.cartt){
      if(a_product.id == product.id && !Found){
        Found = true;

        continue;
      }

      newCart.push(a_product)
    }


    localStorage.setItem("cart", JSON.stringify(newCart))
    

    this.cart.next(newCart);
  }

  mShowCart(){

    // const item = localStorage.getItem("cart") || "[]";
    // this.cart = JSON.parse(item) || []
    
    return this.cart;
  }

  mCheckout(data:any){

    this.FinalOrder.next(data);
  }

  mGetOrders(){
    return this.FinalOrder;
  }

  mClear(){
    this.cart  = new BehaviorSubject<any>({});
    this.FinalOrder  = new BehaviorSubject<any>({});
    localStorage.removeItem('cart')

  }


}
