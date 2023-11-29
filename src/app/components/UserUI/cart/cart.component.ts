import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { Products } from 'src/app/Interfaces/products';
import { AddToCartService } from 'src/app/services/add-to-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {

  //items = JSON.parse(localStorage.getItem('CartItems') || '[]')
  // totalAmount = this.cartService.totAmount
  // userId: any;
  // products : any;
  // i = 0

  constructor(private cart:AddToCartService){}


  cartTotal = 0;
  cartItems = [];

  sortedItems = [];

  total = 0

  // totalAmount: this.bagService.totAmount

  ngOnInit(): void {

//   const item = localStorage.getItem("cart") || "[]";
//   const cartt = JSON.parse(item) || []
// console.log(cartt.length)
  // this.cartTotal = 5
  // this.mSortCart(cartt)

    this.cart.mShowCart().subscribe((data) => {
      this.cartTotal = data.length;
      this.mSortCart(data)
    })

   //this.items
  //  this.getAllItem()
  //  this.calcTotal()
  //  const user = this.getUser()
  //  this.userId = user.id

  // this.getAllItem();{

    // this.products = this.cartService.getAllItems()
    // window.sessionStorage.setItem("cart", JSON.stringify(this.products))
  // }
  }

  cartMap = new Map<any, any>();

  mSortCart(data:any){
    this.cartMap.clear()
    this.total = 0

    for(let item of data){

      console.log(item)

      if(this.cartMap.has(item.id))
      {
        let newItem = ((this.cartMap.get(item.id) || {}));

        newItem.quantity = (newItem.quantity + 1);

        this.cartMap.set(item.id, newItem)
        this.total = this.total + item.details.price
      }
      else
      {
        let prod_det_qua = {
          quantity: 1,
          product:item.details
        }

        this.cartMap.set(item.id, prod_det_qua);
        this.total = this.total + item.details.price
      }
    }
    
  }
  
mDecrementCart(product:any) {

  const prod = {
    _id:product.id,
    price:product.price,
    business:{_id:product.business},
    image:product.image,
    title:product.title
  }

  this.cart.RemoveFromCart(prod)
  }

  mIncrementCart(product:any) {
    for(let obj of this.cartMap.entries()){

      console.log(">>>", obj[1].product)
      // console.log()

      if(obj[1].product == product){

      //   // if(product.promo.onPromo){
      //   //   product.price = product.promo.newPrice

      //   // }

      //   console.log(product)


        const prod = {
          _id:product.id,
          price:product.price,
          business:{_id:product.business},
          image:product.image,
          title:product.title
        }

        this.cart.AddToCart(prod);
      }
      else{
      }
      
    }
  }

  mCheckout(){ 
    const orders:any = []
    

    for (let prod of this.cartMap.entries()){
      const orderItems:any = {}
      orderItems.title = prod[1].product.title
      orderItems.quantity = prod[1].quantity
      orderItems.business = prod[1].product.business
      orderItems.productId = prod[1].product.id
      orderItems.price = prod[1].product.price

      orders.push(orderItems);
    }

    this.cart.mCheckout(orders)

    // console.log(orders)
  }

  // getUser() {
  //   throw new Error('Method not implemented.');
  // }
  // getAllItem() {
  //   this.products = this.cartService.getAllItems()
  //   window.sessionStorage.setItem("cart", JSON.stringify(this.products))
  // }


//   delete(index:any,e:Event) {
//     console.log(this.products[index].quantity)

//     this.cartService.cartItemcount.next(this.cartService.cartItemcount.value - this.products[index].quantity)
//     this.products.splice(index, 1);
//     this.calcTotal();
//     localStorage.setItem('CartItems', JSON.stringify(this.products))

// }
// increment(qty: any, index: number){
//   qty++
//   this.products[index].quantity = qty
//   this.products.length
//   this.cartService.cartItemcount.next(this.cartService.cartItemcount.value + 1)
//   this.cartService.cartTotal.next(this.cartService.cartTotal.value + this.totalAmount)

//   this.calcTotal();
// }
// decrementQuantity(qty: any, index: number){

//   if(qty > 1){
//     qty--
//   this.products[index].quantity = qty
//   this.products.length;
//   this.cartService.cartItemcount.next(this.cartService.cartItemcount.value - 1)
//   //this.cartService.cartTotal.next(this.cartService.cartTotal.value - this.totalAmount)

//   this.calcTotal();
//   }

// }
// qntUpdate($event: any) {
//   this.calcTotal();
// }

// calcTotal() {
//   this.totalAmount = 0
//   this.products.forEach((item: { quantity: number; price: number; }) => {
//     this.totalAmount += (item.quantity * item.price);
//     //this.bagService.cartTotal.next(this.totalAmount);
//     //console.log(this.cartTotal)
//     localStorage.setItem('Total',JSON.stringify(this.totalAmount))
//   })

//   this.cartService.cartTotal.next(this.totalAmount);
//   localStorage.setItem('CartItems', JSON.stringify(this.products))
//   localStorage.setItem('Total',JSON.stringify(this.totalAmount))

// }

}
