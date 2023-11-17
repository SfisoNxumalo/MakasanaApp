import { Component } from '@angular/core';
import { ProductService,  } from 'src/app/services/product.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  {
  business:any ={}
  track:any = "";
  productDetail:any ={
    title:"",
    image:"https://i.postimg.cc/02V5gKJ8/pos.jpg",
    description:"",
    price:Number,
    quantity:Number,
  }

  ngOnInit() {
    this.business = this.tokenService.getUser()
  }

  async loadImage(event:any){
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = async (event:any) => {

     this.track  = {
        path: event.target.result,
     }
      console.log(this.track.path)
    }

   reader.readAsDataURL(selectedFile);

 
  }
  constructor(private productService: ProductService, private tokenService: TokenstorageService){} 

  createProduct(){

    this.productService.createProduct(this.business.id,this.productDetail.title,this.productDetail.image, this.productDetail.price, this.productDetail.description,
      this.productDetail.category,this.productDetail.quantity,this.productDetail.condition).subscribe({
        next:data =>{
          console.log(data)
        }
      })
  }

  
}
