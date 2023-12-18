import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { ProductService } from 'src/app/services/busi-product.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-add-website-details',
  templateUrl: './add-website-details.component.html',
  styleUrls: ['./add-website-details.component.css']
})
export class AddWebsiteDetailsComponent implements OnInit{

  constructor(private prod:ProductService,private token:TokenService){}

  CompanyName = "Makasana"
  CompanyDetails:any = {};

  hasWebsite = 0

  spnValue = 0

  ngOnInit(): void {

      this.token.mShow().subscribe((data) =>{
        this.CompanyDetails = data
        this.WebsiteExists(this.CompanyDetails.id)
      })
    
  }

  form = {
    about:"",
    services:""
  }

  getWebTimer?:any

  ngOnDestroy(){
    clearTimeout(this.getWebTimer)
  }

  WebsiteExists(id:any){
    this.spnValue = 1

    this.getWebTimer = setTimeout(() => {
      this.prod.mViewWebsite(id).subscribe({
        next: (comp) => {(
          this.hasWebsite = 1,
          this.spnValue = 0
        )},
        error: (err) => {
          if(err.error.message == "Company has no website"){
            this.hasWebsite = 2,
          this.spnValue = 0
          }
          else{
            alert("Unexpected error occured")
          }
          // this.blLoadComplete = false
  
        }
      });
    }, 2000)
    
      
  }

  mCreate() {
    this.spnValue = 1;
    this.prod.mCreateWebsite(this.form).pipe(
      finalize(() => {
        this.spnValue = 0;
      })).subscribe((data) => {
        this.form = {
          about:"",
          services:""
        }
        
      alert(data.message)
      this.WebsiteExists(this.CompanyDetails.id)
    })
  }
}
