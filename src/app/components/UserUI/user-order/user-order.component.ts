import { Component, OnInit } from '@angular/core';
import { PassOrderService } from 'src/app/services/pass-order.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit{

  form={
    username:"",
    password:"",
  }
  constructor(private getOrder:PassOrderService) { }

  order:any = [];
  orderID:any

  ngOnInit(): void {
    this.getOrder.mGetOrder().subscribe((data) => {
      this.order = data
      this.orderID = data.orderNo
    })
  }



  Register(){
  

    console.log(this.form)

  }

  
}
