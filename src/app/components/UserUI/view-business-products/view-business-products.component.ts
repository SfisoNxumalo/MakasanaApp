
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { CustProductsService } from 'src/app/services/cust-products.service';
import { FakeStoreService } from 'src/app/services/fake-store.service';



@Component({
  selector: 'app-view-business-products',
  templateUrl: './view-business-products.component.html',
  styleUrls: ['./view-business-products.component.css']
})
export class ViewBusinessProductsComponent implements OnInit{

  selectedValue!: string;

  foundProducts$!: Observable<any[]>;
  private searchTerms = new Subject<string>();

  search(term: string): void {
    this.searchTerms.next(term);
    console.log(term)
  }

  constructor(private fakeApi:FakeStoreService, 
    private route:ActivatedRoute,
    private productService:CustProductsService,
    private cart:AddToCartService
    ){}

  image = "https://media.istockphoto.com/id/620737858/photo/cape-town-and-the-12-apostels-from-above.jpg?s=612x612&w=is&k=20&c=WBxI8OmAFXoGz5I5QjU0eI87I5C6K8h0Xs4JmArrEQQ=";

  
  BusinessID?:String | null;
  ngOnInit(): void {
    this.cart.mShowCart().subscribe((data) => {
      this.cartCount = data.length;
    })
  

    this.foundProducts$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.mGetSearch(term)
      ),
    );

    this.route.paramMap.subscribe(params => {
      this.BusinessID = params.get("id");
      const BusinessName = params.get("business");
      this.mViewProducts(this.BusinessID);
      this.title = BusinessName + " Products" || "Unknown Business";
      // this.mViewProduct(this.productID);
    });

    // this.mGet();
  }

  title:any = "Unknown Business"
  cartCount = 0

  mGetSearch(term:string):Observable<any>{

    const ssearchData = new BehaviorSubject<any>({});
    ssearchData.next(term)

    return ssearchData;
  }

  blLoadComplete = true;
  products:any = [];

  mViewProducts(id:any){
    this.productService.getBusinessProducts(id, "").subscribe({
      next: (response) => {(
        this.products = response,
        this.blLoadComplete = false
      )},
      error: (error) => {
        alert(error)
      }
    })
  }

  mAddToCart(){
    alert("added to cart")
  }
  onSale(){ 
    console.log(1-2)

  }


  onChange(){
    console.log(this.selectedValue)
    if(this.selectedValue === "A-Z"){
      const sortedProducts = this.products.sort((a: { title: string; }, b: { title: any; }) => a.title.localeCompare(b.title));
      console.log(sortedProducts);      
    }
    if(this.selectedValue == "Price-L"){
      const sortedItems = this.products.sort((a: { price: number; }, b: { price: number; }) => (a.price > b.price ? 1 : -1))
      console.log(sortedItems);      
    }
    if(this.selectedValue == "Price-H"){
      const sortedItems = this.products.sort((a: { price: number; }, b: { price: number; }) => (a.price > b.price ? -1 : 1))
      console.log(sortedItems);      
    }
    if(this.selectedValue === "sale"){
      console.log(this.products)
      let array:any = []
      array = this.products
      this.products = array.filter((x:any)=>x.promo.onPromo === true)
    }
  }

}
