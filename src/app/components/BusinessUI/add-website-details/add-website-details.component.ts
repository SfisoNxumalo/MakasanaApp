import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/busi-product.service';

@Component({
  selector: 'app-add-website-details',
  templateUrl: './add-website-details.component.html',
  styleUrls: ['./add-website-details.component.css']
})
export class AddWebsiteDetailsComponent {

  constructor(private prod:ProductService){}


  form = {
    about:"",
    services:""
  }

  spnValue = 0;

  mCreate() {
    this.prod.mCreateWebsite(this.form).subscribe((data) => {
      console.log(data.message)
    })
  }
}
