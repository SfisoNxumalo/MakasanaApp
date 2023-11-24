import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';

import {  ViewChild, ElementRef } from '@angular/core';

declare var bootstrap: any; // Declare Bootstrap variable


@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent {

  @ViewChild('toastElement')
  toastElement!: ElementRef;

  spnValue = 0;

  private toastInstance: any;
  form={
    email:"",
    password:"",
  }

  constructor(private authSer: AuthService, private token:TokenService,private route:Router) { }

  mSignIn(){
    this.spnValue = 1;
    this.authSer.mSignIn(this.form).subscribe({
      next: (response) => {
        console.log(response),
        this.token.saveToken(response.accessToken),
        this.showToast();
        setTimeout(() => {
          this.route.navigate(["/dashboard"])
        }, 2000);
      },
      error: (error) => {
        console.log(error)
      }
    })
    this.spnValue = 0;
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

