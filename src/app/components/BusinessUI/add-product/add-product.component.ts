import { Component } from '@angular/core';
import { Products } from 'src/app/Interfaces/products';
import { ProductService,  } from 'src/app/services/busi-product.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  {

  business:any ={}

  productDetail:Products = {
    title: "",
    image: "https://i.postimg.cc/02V5gKJ8/pos.jpg",
    description: "",
    category: "",
    price: 0,
    condition: "",
    quantity: 0,
    promo: {onPromo:false, promoDesc:"", newPrice:0, startDate : new Date(), endDate: new Date()},
    added: new Date(),
    updated: new Date()
  }

  ngOnInit() {
    // this.business = this.tokenService.getUser()
  }

  async loadImage(event:any){
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = async (event:any) => {

     this.productDetail.image  = event.target.result
     
      // console.log(this.track.path)
    }

   reader.readAsDataURL(selectedFile);
  }

  constructor(private productService: ProductService, private tokenService: TokenstorageService){} 

  createProduct(){

    this.productService.mCreateProduct(this.productDetail).subscribe({
        next: (message) => {(
          // this.products = product,
          console.log(message),
          this.mClear()
        )},
        error: (err) => {
          console.log(err)
          // this.blLoadComplete = false
        }
      })
  }

  mClear(){
    this.productDetail = {
      title: "",
      image: "https://i.postimg.cc/02V5gKJ8/pos.jpg",
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

  
}
