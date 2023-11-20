import { Component } from '@angular/core';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { Products } from 'src/app/Interfaces/products';
import { AddToCartService } from 'src/app/services/add-to-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent {

  //items = JSON.parse(localStorage.getItem('CartItems') || '[]')
  // totalAmount = this.cartService.totAmount
  // userId: any;
  // products : any;
  // i = 0

  constructor(private cart:AddToCartService){}


  cartTotal = 0;
  cartItems = [];

  sortedItems = [];

  // totalAmount: this.bagService.totAmount

  ngOnInit(): void {

    this.cart.mShowCart().subscribe((data) => {
      this.cartTotal = data.length;
      this.mSortCart(data)
      // console.log(data);
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

  for(let item of data){

    if(this.cartMap.has(item.details)){
      let newItem = ((this.cartMap.get(item.details) || 0) + 1);
      this.cartMap.set(item.details, newItem);
    }
    else{
      this.cartMap.set(item.details, 1);
    }
    
  }
}

mDecrementCart(product:any) {

  for(let obj of this.cartMap.entries()){

    if(obj[0] == product){
      let newItemCount = ((this.cartMap.get(product) || 0) - 1);
      
      if(newItemCount == 0){
        this.cartMap.delete(product);
      }
      else{
        this.cartMap.set(product, newItemCount);
      }
      
      // console.log("found")
    }
    else{
      // this.cartMap.set(item.details, 1);
    }
    
  }

  }
  mIncrementCart(product:any) {
    for(let obj of this.cartMap.entries()){

      if(obj[0] == product){
        let newItemCount = ((this.cartMap.get(product) || 0) + 1);
        
        if(newItemCount == 0){
          this.cartMap.delete(product);
        }
        else{
          this.cartMap.set(product, newItemCount);
        }
        
        // console.log("found")
      }
      else{
        // this.cartMap.set(item.details, 1);
      }
      
    }
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
