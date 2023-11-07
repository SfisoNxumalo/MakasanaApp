import { Component } from '@angular/core';

import { FakeStoreService } from 'src/app/fake-store.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent {

  constructor(private fakeApi:FakeStoreService){}
  image = "https://media.istockphoto.com/id/620737858/photo/cape-town-and-the-12-apostels-from-above.jpg?s=612x612&w=is&k=20&c=WBxI8OmAFXoGz5I5QjU0eI87I5C6K8h0Xs4JmArrEQQ=";


  ngOnInit(): void {
    this.mGet();
  }
  blLoadComplete = true;
  products:any = [];

  mGet(){
    this.fakeApi.mGetProducts().subscribe({
      next: (res) => {(
        this.products = res,
        console.log(res),
        this.blLoadComplete = false
      )},
      error: (err) => {
        console.log(err)
        this.blLoadComplete = false
      }

    })


    
  }
  

}
