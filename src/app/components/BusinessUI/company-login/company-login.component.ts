import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent {

  form={
    email:"",
    password:"",
  }

  constructor(private authSer: AuthService) { }
  // signIn(){
  //   this.userService.signIn(this.form.email, this.form.password).subscribe({
  //     next: data => {
  //     this.tokenStorage.saveToken(data.accessToken);
  //     this.tokenStorage.saveUser(data);
  //   }})
  // }

  mSignIn(){
    this.authSer.mSignIn(this.form).subscribe({
      next: (response) => {(
        console.log(response)
      )},
      error: (error) => {
        console.log(error)
      }
    })
  }
}
