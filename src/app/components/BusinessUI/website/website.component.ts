import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/busi-product.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit{
  constructor(private route:ActivatedRoute, private busi:ProductService){}

  companyDetails:any = []

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const companyID = params.get("id");
    this.Company(companyID);
  });
}

Company(id:any){
  this.busi.mViewWebsite(id).subscribe({
    next: (comp) => {(
      this.companyDetails = comp.message[0],
      console.log(this.companyDetails)
    )},
    error: (err) => {
      console.log(err)
      // this.blLoadComplete = false
    }
  });

}

}
