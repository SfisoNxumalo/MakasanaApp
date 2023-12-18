import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Interfaces/products';
import { FakeStoreService } from 'src/app/services/fake-store.service';
import { ProductService } from 'src/app/services/busi-product.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-business-products',
  templateUrl: './business-products.component.html',
  styleUrls: ['./business-products.component.css']
})
export class BusinessProductsComponent implements OnInit {
  blLoadComplete = true;
  business:any= {}
  products:Products[] = [];

  constructor(private fakeApi:FakeStoreService, private productService: ProductService, private tokenService:TokenstorageService,private token:TokenService, private route:Router){}
  image = "https://media.istockphoto.com/id/620737858/photo/cape-town-and-the-12-apostels-from-above.jpg?s=612x612&w=is&k=20&c=WBxI8OmAFXoGz5I5QjU0eI87I5C6K8h0Xs4JmArrEQQ=";


  CompanyDetails:any = {};

  ngOnInit(): void {
    this.business = this.tokenService.getUser()
    // this.mGet();
    this.getAllProduct()

    this.token.mShow().subscribe((data) =>{
      this.CompanyDetails = data
    })
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
        this.blLoadComplete = false
        if(err.status == 405){
          alert("Session expired, Login again")
          this.route.navigate(["/company-login"])
        }
        else{
          alert(err.error.message)
        }
        
        
      }
    })
  }

  
  
}
