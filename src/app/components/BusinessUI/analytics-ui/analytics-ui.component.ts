import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { FakeStoreService } from 'src/app/services/fake-store.service';

@Component({
  selector: 'app-analytics-ui',
  templateUrl: './analytics-ui.component.html',
  styleUrls: ['./analytics-ui.component.css']
})
export class AnalyticsUiComponent  implements OnInit{

  constructor(private route:ActivatedRoute, private fakeApi:FakeStoreService){}

  product:any = {}

  productID:any;

  ngOnInit(): void {

    this.mGetProduct()

    const table:any = document.getElementById("graph");

    
    // table.innerHTML = "";

(async function() {
  const data = [
    { year: "Jan", count: 10 },
    { year: "Feb", count: 20 },
    { year: "Mar", count: 15 },
    { year: "Apr", count: 25 },
    { year: "Jun", count: 22 },
    { year: "Jul", count: 30 },
    { year: "Aug", count: 28 },
  ];

      new Chart(
        table,
        {
          type: 'bar',
          data: {
            labels: data.map(row => row.year),
            datasets: [
              {
                label: 'Sales per month',
                data: data.map(row => row.count),
                backgroundColor: 'green',
              }
            ]
          }
        }
      );
    })();
    
  }

  mGetProduct(){
    // const id = this.route.snapshot.params[('id')]
    this.fakeApi.mGetSelectedProduct(5).subscribe({
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