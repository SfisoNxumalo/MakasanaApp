import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from 'src/app/fake-store.service';

@Component({
  selector: 'app-business-products',
  templateUrl: './business-products.component.html',
  styleUrls: ['./business-products.component.css']
})
export class BusinessProductsComponent implements OnInit {

  constructor(private fakeApi:FakeStoreService){}
  image = "https://media.istockphoto.com/id/620737858/photo/cape-town-and-the-12-apostels-from-above.jpg?s=612x612&w=is&k=20&c=WBxI8OmAFXoGz5I5QjU0eI87I5C6K8h0Xs4JmArrEQQ=";


  ngOnInit(): void {
    this.mGet();
  }
  products:any = [];

  mGet(){
    this.fakeApi.mGetProducts().subscribe({
      next: (res) => {(
        this.products.push(res),
        console.log(typeof(res))
      )},
      error: (err) => {
        console.log(err)
      }

    })

    
  }
  
  
}
