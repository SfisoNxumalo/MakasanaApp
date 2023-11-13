import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {


  cartItemcount  = new BehaviorSubject<any>(0);
  cartTotal = new BehaviorSubject<any>(0);

  // items:any

  //totalAmount = 0;

  totItems = 0;

items: Products[] = [];
totAmount = 0
endpoint = "https://fakestoreapi.com/";

constructor(private http: HttpClient){}
ngOnInit(): void {
this.getAllItems()
}
addToCart(product: any ) {



  const productExistInCart = this.items.find(({productName}) => productName === product.productName);
  // productExistInCart.quantity = 0
  if (!productExistInCart) {
  this.items.push({...product});
  this.items.length;
  this.cartItemcount.next(this.cartItemcount.value + 1);
  localStorage.setItem('CartCount',JSON.stringify(this.cartItemcount.value))
  // return;
}
}

if(productExistInCart: { quantity: number; }){
  productExistInCart.quantity = productExistInCart.quantity + 1;
  this.cartItemcount.next(this.cartItemcount.value + 1);
  console.log(productExistInCart.quantity)
  this.Total()
 }
 Total() {

  this.totAmount = 0
  this.items.forEach((item:any) => {
    this.totAmount += (item.price * item.quantity)
    this.cartTotal.next(this.totAmount);
    console.log(this.totAmount)
    localStorage.setItem('TotalAmount',JSON.stringify(this.totAmount))
  })

  this.cartTotal.next(this.totAmount);
  localStorage.setItem('CartItems', JSON.stringify(this.items))

}
getCount(){
  return this.cartItemcount;
}

getTotal(){

  return this.cartTotal;
}

getAllItems() {
  // console.log(this.items)
  return this.items
};

sendToCart(payload: any):Observable<any>{
  return this.http.post<any>(this.endpoint,payload)
}
getUserCart():Observable<any>{
  return this.http.get<any>(this.endpoint)
}

delete(i:number){
  this.items.splice(i,1);
  this.getTotal();

  localStorage.setItem('CartItems', JSON.stringify(this.items))
  localStorage.setItem('TotalAmount',JSON.stringify(this.cartTotal))
}


}


