import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.css']
})
export class CompanySignupComponent {

  form = {
    name:"",
    email:"",
    password:"",
    industry: "",
    address:"",
    phone:"",
  }
  constructor(private authSer: AuthService) { }

  signUp(){
    this.authSer.mSignUp(this.form).subscribe(data=> [
        console.log(data)
      ])
  }

}
