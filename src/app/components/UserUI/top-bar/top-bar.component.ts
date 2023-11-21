import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{

  constructor(private cart:AddToCartService){}

  cartCount = 0

  ngOnInit(): void {
    this.cart.mShowCart().subscribe((data) => {
      this.cartCount = data.length;
      // console.log();
    })
  }

}
