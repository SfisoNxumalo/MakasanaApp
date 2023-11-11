import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeStoreService } from 'src/app/services/fake-store.service';

@Component({
  selector: 'app-user-view-product',
  templateUrl: './user-view-product.component.html',
  styleUrls: ['./user-view-product.component.css']
})
export class UserViewProductComponent {

  prodImage = "data:image/jpeg;base64,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"

  constructor(private route:ActivatedRoute, private fakeApi:FakeStoreService){}

  product:any = {}

  productID:any;

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.product = params.get("id");
    // });

    this.mGetProduct()
  }

  mGetProduct(){
    const id = this.route.snapshot.params[('id')]
    this.fakeApi.mGetSelectedProduct(id).subscribe({
      next: (res) => {(
        this.product = res,
        console.log(res)
        // this.blLoadComplete = false
      )},
      error: (err) => {
        console.log(err)
        // this.blLoadComplete = false
      }

    })
  }

}
