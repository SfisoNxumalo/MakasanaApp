import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from 'src/app/services/fake-store.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private fakeApi:FakeStoreService){}
  image = "https://media.istockphoto.com/id/620737858/photo/cape-town-and-the-12-apostels-from-above.jpg?s=612x612&w=is&k=20&c=WBxI8OmAFXoGz5I5QjU0eI87I5C6K8h0Xs4JmArrEQQ=";


  ngOnInit(): void {
    this.mGet();
  }
  blLoadComplete = true;
  products:any = [];

  mGet(){
    this.fakeApi.mGetFiveProducts().subscribe({
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