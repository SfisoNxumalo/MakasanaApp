import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Interfaces/products';
import { FakeStoreService } from 'src/app/services/fake-store.service';
import { ProductService } from 'src/app/services/busi-product.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';


@Component({
  selector: 'app-business-products',
  templateUrl: './business-products.component.html',
  styleUrls: ['./business-products.component.css']
})
export class BusinessProductsComponent implements OnInit {
  blLoadComplete = true;
  business:any= {}
  products:Products[] = [];

  constructor(private fakeApi:FakeStoreService, private productService: ProductService, private tokenService:TokenstorageService){}
  image = "https://media.istockphoto.com/id/620737858/photo/cape-town-and-the-12-apostels-from-above.jpg?s=612x612&w=is&k=20&c=WBxI8OmAFXoGz5I5QjU0eI87I5C6K8h0Xs4JmArrEQQ=";


  ngOnInit(): void {
    this.business = this.tokenService.getUser()
    // this.mGet();
    this.getAllProduct()
  }


  mGet(){
    this.fakeApi.mGetProducts().subscribe({
      next: (res) => {(
        // this.products = res,
        this.blLoadComplete = false
      )},
      error: (err) => {
        console.log(err)
        this.blLoadComplete = false
      }
    })
  }
  
  getAllProduct(){
    this.productService.getMyProducts().subscribe({
      next:(res) => {(
        this.products = res,
        this.blLoadComplete = false
      )},
      error: (err) => {
        console.log(err)
        this.blLoadComplete = false
      }
    })
  }
  
  
}
