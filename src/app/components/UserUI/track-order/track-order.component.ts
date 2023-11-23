import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit{

  my_orders:any = []
  constructor(private orders:CartserviceService){}
  ngOnInit(): void {

    this.orders.mGetOrders().subscribe({
      next: data => {(
        this.my_orders = data.message
      )},
      error: (err) => {
        console.log(err)
      }
    });


  }

}
