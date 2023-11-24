import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
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
    private analyticsService:AnalyticsService){}

  product:any = {}

  productID:any;

  MaxProduct:any = 0
  MaxSalesMonth:any = 0

  ngOnInit(): void {

    // this.mGetProduct()
    this.mGetProductData();
    this.mGetOrderData();

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
    console.log(data)
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
  }

  mGetProductData(){
    this.analyticsService.mGetProductData().subscribe({
      next: data => {(
        this.mSort(data)
      )},
      error: (err) => {
        console.log(err)
      }
    });
  }

  mGetOrderData(){
    this.analyticsService.mGetOrderData().subscribe({
      next: data => {(
        // console.log(data.message)
        this.mOrderSort(data.message)
      )},
      error: (err) => {
        console.log(err)
      }
    });
  }

  mSort(data:any){
    for (let product of data){
      this.MaxProduct += product.quantity;
    }
  }

  private month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  mOrderSort(data:any){
    const TotalOrdersProcessed = new Map();
    const TotalProductsSold = new Map();
    
    const OrdersProcessed:any = [];
    const ProductsSold:any = [];
    
    for (let order of data) {
      const date = new Date(order.date)
      const month = this.month[date.getUTCMonth()]

      if(TotalOrdersProcessed.has(month)){
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
   
    const table:any = document.getElementById("graph");
    this.mGenerateAnalytics(table, ProductsSold)
  }

}
