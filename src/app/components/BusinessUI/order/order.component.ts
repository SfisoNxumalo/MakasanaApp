import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  myOrder : any;

  constructor(private orderService :  OrderService)
  {

  }
  ngOnInit(): void 
  { 
    this.myOrder = this.orderService

  }





}
