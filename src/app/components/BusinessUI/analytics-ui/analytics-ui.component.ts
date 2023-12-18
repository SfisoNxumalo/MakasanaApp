import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { finalize } from 'rxjs';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { ProductService } from 'src/app/services/busi-product.service';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { FakeStoreService } from 'src/app/services/fake-store.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-analytics-ui',
  templateUrl: './analytics-ui.component.html',
  styleUrls: ['./analytics-ui.component.css']
})

export class AnalyticsUiComponent implements OnInit{

  constructor(private route:ActivatedRoute, 
    private fakeApi:FakeStoreService,
    private analyticsService:AnalyticsService,
    private productService:ProductService){}

  product:any = {}

  productID:any;

  MaxProduct:any = 0
  MaxSalesMonth:any = 0

  OrderCompleted = 0
  OrderPending = 0
  OrderRejected = 0

  blLoadComplete = true;

  MostSellingProduct:any = {
    image:"",
    title:""
  }

  ngOnInit(): void {

    // this.mGetProduct()
    this.blLoadComplete = true;

    setTimeout(() => {
      this.mGetProductData();
      this.mGetOrderData();
    }, 2000)
    

    // table.innerHTML = "";

// (async function() {
//   const data = [
//     { year: "Jan", count: 10 },
//     { year: "Feb", count: 20 },
//     { year: "Mar", count: 15 },
//     { year: "Apr", count: 25 },
//     { year: "Jun", count: 22 },
//     { year: "Jul", count: 30 },
//     { year: "Aug", count: 28 },
//   ];

//       new Chart(
//         table,
//         {
//           type: 'bar',
//           data: {
//             labels: data.map(row => row.year),
//             datasets: [
//               {
//                 label: 'Sales per month',
//                 data: data.map(row => row.count),
//                 backgroundColor: 'green',
//               }
//             ]
//           }
//         }
//       );
//     })();

  }

  async mGenerateAnalytics(table:any, data:any){
    this.blLoadComplete = true;
        new Chart(
          table,
          {
            type: 'bar',
            data: {
              labels: data.map((row: { key: any; }) => row.key),
              datasets: [
                {
                  label: 'Sales per month',
                  data: data.map((row: { value: any; }) => row.value),
                  backgroundColor: 'green',
                }
              ]
            }
          }
        );

        this.blLoadComplete = false;
  }

  mGetProductData(){
    this.blLoadComplete = true;
    this.analyticsService.mGetProductData()
    .pipe(finalize(() => {this.blLoadComplete = false;})).subscribe({
      next: data => {(
        this.mSort(data)
      )},
      error: (err) => {
        alert(err)
      }
    });
  }

  mGetOrderData(){
    this.blLoadComplete = true;
    this.analyticsService.mGetOrderData()
    .pipe(finalize(() => {this.blLoadComplete = false;})).subscribe({
      next: data => {(
        // console.log(data.message)
        this.mOrderSort(data.message)
      )},
      error: (err) => {
        alert(err)
      }
    });
  }

  Prod_status = "Empty"
  prod_count = 0

  mSort(data:any){
    this.blLoadComplete = true;
    for (let product of data){
      this.MaxProduct += product.quantity;
      this.prod_count++
    }

    if(this.MaxProduct == 0){
      this.Prod_status = "empty"

    }
    else if(this.MaxProduct <= 10){
      this.Prod_status = "Critical"
    }

    else if((this.MaxProduct / 2) <= 20){
      this.Prod_status = "Low"
    }
    else{
      this.Prod_status = "Healthy"
    }

    this.blLoadComplete = false;
  }

  private month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  mOrderSort(data:any){

    this.blLoadComplete = true;

    const TotalOrdersProcessed = new Map();
    const TotalProductsSold = new Map();
    const MostSelling = new Map();
    
    const OrdersProcessed:any = [];
    const ProductsSold:any = [];
    
    for (let order of data) {
      const date = new Date(order.date)
      const month = this.month[date.getUTCMonth()]

      switch(order.order_status) {
        case "pending":
          this.OrderPending = this.OrderPending + 1
          break;
          case "completed":
          this.OrderCompleted = this.OrderCompleted + 1
          break;
          case "rejected":
          this.OrderRejected = this.OrderRejected + 1
          break;
      }
      
      if(MostSelling.has(order.productId)){
        const cun = MostSelling.get(order.productId);

        MostSelling.set(order.productId, (cun + 1))

      }
      else{
        MostSelling.set(order.productId, 1)
      }

      if(TotalOrdersProcessed.has(month))
      {
        let prevcount = TotalOrdersProcessed.get(month);
        let prevQuantityCount = TotalProductsSold.get(month);

        TotalProductsSold.set(month, (prevQuantityCount + order.quantity));
        TotalOrdersProcessed.set(month, (prevcount + 1));

        continue;
      }

       
      TotalProductsSold.set(month, order.quantity);
      TotalOrdersProcessed.set(month, 1);
    }

    let month = new Date().getMonth();

    this.MaxSalesMonth = TotalOrdersProcessed.get(this.month[month]) || 0

    TotalProductsSold.forEach((value, key):any => ProductsSold.push({value, key}))
   
    const Most = {product:"", num:0}
    const table:any = document.getElementById("graph");
    this.mGenerateAnalytics(table, ProductsSold)
    // console.log(MostSelling)
    MostSelling.forEach((value, key):any => {
        if(value > Most.num){
        Most.product = key,
      Most.num = value
      }
    }
    )

   if(Most.product != ""){
      this.productService.getOneProduct(Most.product).subscribe({
            next: (product) => {(
              this.MostSellingProduct = product,
              console.log(product)
            )},
            error: (err) => {
              console.log(err)
              // this.blLoadComplete = false
            }
          });
   }

   this.blLoadComplete = false;
  }

}
