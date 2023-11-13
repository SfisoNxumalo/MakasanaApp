import { Component } from '@angular/core';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { Products } from 'src/app/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent {
  //items = JSON.parse(localStorage.getItem('CartItems') || '[]')
  totalAmount = this.cartService.totAmount
  userId: any;
  products : any;
  i = 0


  //cartTotal: any;

  // totalAmount: this.bagService.totAmount
  constructor(private cartService:  CartserviceService,){}
  ngOnInit(): void {
   //this.items
   this.getAllItem()
   this.calcTotal()
  //  const user = this.getUser()
  //  this.userId = user.id

  this.getAllItem();{

    this.products = this.cartService.getAllItems()
    window.sessionStorage.setItem("cart", JSON.stringify(this.products))
  }

  }
  // getUser() {
  //   throw new Error('Method not implemented.');
  // }
  getAllItem() {
    this.products = this.cartService.getAllItems()
    window.sessionStorage.setItem("cart", JSON.stringify(this.products))
  }


  delete(index:any,e:Event) {
    console.log(this.products[index].quantity)

    this.cartService.cartItemcount.next(this.cartService.cartItemcount.value - this.products[index].quantity)
    this.products.splice(index, 1);
    this.calcTotal();
    localStorage.setItem('CartItems', JSON.stringify(this.products))

}
increment(qty: any, index: number){
  qty++
  this.products[index].quantity = qty
  this.products.length
  this.cartService.cartItemcount.next(this.cartService.cartItemcount.value + 1)
  this.cartService.cartTotal.next(this.cartService.cartTotal.value + this.totalAmount)

  this.calcTotal();
}
decrementQuantity(qty: any, index: number){

  if(qty > 1){
    qty--
  this.products[index].quantity = qty
  this.products.length;
  this.cartService.cartItemcount.next(this.cartService.cartItemcount.value - 1)
  //this.cartService.cartTotal.next(this.cartService.cartTotal.value - this.totalAmount)

  this.calcTotal();
  }

}
qntUpdate($event: any) {
  this.calcTotal();
}

calcTotal() {
  this.totalAmount = 0
  this.products.forEach((item: { quantity: number; price: number; }) => {
    this.totalAmount += (item.quantity * item.price);
    //this.bagService.cartTotal.next(this.totalAmount);
    //console.log(this.cartTotal)
    localStorage.setItem('Total',JSON.stringify(this.totalAmount))
  })

  this.cartService.cartTotal.next(this.totalAmount);
  localStorage.setItem('CartItems', JSON.stringify(this.products))
  localStorage.setItem('Total',JSON.stringify(this.totalAmount))

}

}
