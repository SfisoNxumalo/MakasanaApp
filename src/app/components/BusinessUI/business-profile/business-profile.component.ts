import { Component } from '@angular/core';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css']
})
export class BusinessProfileComponent {
   
  business:any={}
   
  constructor( private tokenService:TokenstorageService){
   this.business = this.tokenService.getUser()
   console.log(this.business)

  }


}
