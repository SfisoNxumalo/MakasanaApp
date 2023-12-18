import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/busi-product.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit{
  constructor(private route:ActivatedRoute, private busi:ProductService, private router:Router){}

  companyDetails:any = []
  spnValue = 1

  hasWebsite:number = 0

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const companyID = params.get("id");
    this.Company(companyID);
  });
}

timeFetch:any
timerRedirect:any

ngOnDestroy(){
  clearTimeout(this.timerRedirect)
  clearTimeout(this.timeFetch)
  
}

Company(id:any){
  this.spnValue = 1
  this.timeFetch = setTimeout(() => {
    this.busi.mViewWebsite(id).subscribe({
      next: (comp) => {(
        
        this.spnValue = 0,
        this.hasWebsite = 1
        ,this.companyDetails = comp.message
      )},
      error: (err) => {
        if(err.error.message == "Company has no website"){
          this.hasWebsite = 2,
          this.spnValue = 0
          this.timerRedirect = setTimeout(() => {
            this.router.navigate(["/makasana"])
          },3000)
        }
        else{
          alert("Unexpected error occured")
        }
      }
    });
}, 2000)


}

}
