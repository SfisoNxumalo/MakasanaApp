import { Component, OnInit } from '@angular/core';
import { PassOrderService } from 'src/app/services/pass-order.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit{

  
  constructor(private getOrder:PassOrderService) { }

  order:any = [];
  orderID:any

  ngOnInit(): void {
    this.getOrder.mGetOrder().subscribe((data) => {
      console.log(data)
      this.order = data
      this.orderID = data.orderNo
    })
  }

}
