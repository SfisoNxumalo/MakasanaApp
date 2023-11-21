import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {  ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any; // Declare Bootstrap variable


@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.css']
})
export class CompanySignupComponent {
  @ViewChild('toastElement')
  toastElement!: ElementRef;

  private toastInstance: any;

  form = {
    name:"",
    email:"",
    password:"",
    industry: "",
    address:"",
    phone:"",
  }
  constructor(private authSer: AuthService, private route:Router) { }

  signUp(){
    this.authSer.mSignUp(this.form).subscribe(data=> {
        console.log(data)
        this.showToast();
        setTimeout(() => {
          this.route.navigate(["/dashboard"])
        }, 2000);
  })
  }

  showToast() {
    if (!this.toastInstance) {
      this.toastInstance = new bootstrap.Toast(this.toastElement.nativeElement);
    }
    this.toastInstance.show();
  }

  hideToast() {
    if (this.toastInstance) {
      this.toastInstance.hide();
    }
  }

}
