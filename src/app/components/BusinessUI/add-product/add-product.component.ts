import { Component } from '@angular/core';
import { Products } from 'src/app/Interfaces/products';
import { ProductService,  } from 'src/app/services/busi-product.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';


import {  ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any; // Declare Bootstrap variable

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  {

  imageee = "https://paymentcloudinc.com/blog/wp-content/uploads/2021/08/product-ideas-to-sell-300x200.webp";

  business:any ={}
  @ViewChild('toastElement')
  toastElement!: ElementRef;
  private toastInstance: any;

  productDetail:Products = {
    title: "",
    image: "",
    description: "",
    category: "",
    price: 0,
    condition: "",
    quantity: 0,
    promo: {onPromo:false, promoDesc:"", newPrice:0, startDate : new Date(), endDate: new Date()},
    added: new Date(),
    updated: new Date()
  }
  spnValue = 0;

  ngOnInit() {
    // this.business = this.tokenService.getUser()
  }

  async loadImage(event:any){
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    this.productDetail.image = event.target.files[0]
    reader.onload = async (event:any) => {

     this.imageee = event.target.result
     
      // console.log(this.productDetail.image)
    }

   reader.readAsDataURL(selectedFile);
  }

  constructor(private productService: ProductService, private tokenService: TokenstorageService, private route:Router){} 

  createProduct(){
    this.spnValue = 1;

    const formData = new FormData();
    formData.append("title", this.productDetail.title)
    formData.append("image", this.productDetail.image)
    formData.append("description", this.productDetail.description)
    formData.append("category", this.productDetail.category)
    formData.append("price", String(this.productDetail.price))
    formData.append("condition", this.productDetail.condition)
    formData.append("quantity", String(this.productDetail.quantity))
    formData.append("promo", JSON.stringify({onPromo:false, promoDesc:"", newPrice:0, startDate : new Date(), endDate: new Date(), percentage:0}))
     
    
    // this.productDetail.image = "https://paymentcloudinc.com/blog/wp-content/uploads/2021/08/product-ideas-to-sell-300x200.webp"
    this.productService.mCreateProduct(formData).subscribe({
        next: (message) => {
          // this.products = product,
          this. showToast()
          this.mClear()
          this.spnValue = 0;
        },
        error: (err) => {
          if(err.status == 405){
            alert("Session expired, Login again")
            this.route.navigate(["/company-login"])
          }
          else{
            alert(err.error.message)
          }
           this.spnValue = 0;
          // this.blLoadComplete = false
        },
       
      })
  }

  mClear(){
    this.productDetail = {
      title: "",
      image: "https://paymentcloudinc.com/blog/wp-content/uploads/2021/08/product-ideas-to-sell-300x200.webp",
      description: "",
      category: "",
      price: 0,
      condition: "",
      quantity: 0,
      promo: {onPromo:false, promoDesc:"", newPrice:0, startDate : new Date(), endDate: new Date()},
      added: new Date(),
      updated: new Date()
    }
  }
  
  showToast() {
    if (!this.toastInstance) {
      this.toastInstance = new bootstrap.Toast(this.toastElement.nativeElement);
    }
    this.toastInstance.show();
  }

  hideToast() {
    if (this.toastInstance) {
      this.toastInstance.hide();
    }
  }
  
}
