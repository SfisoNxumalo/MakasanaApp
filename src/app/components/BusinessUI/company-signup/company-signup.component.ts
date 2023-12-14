import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {  ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

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

  spnValue = 0;
  constructor(private authSer: AuthService, private route:Router) { }

  signUp(){
    this.spnValue = 1;

    setTimeout(() => {
      this.authSer.mSignUp(this.form)
        .pipe(
          finalize(() => {
            this.spnValue = 0;
          })
        ).subscribe({
              next: data => {
                this.mClear();
                alert(data.message)
                this.route.navigate(["/company-login"])
        
              }, error(err) {
         
                  alert(err.error.message)
                
                // this.spnValue = 0;
              },
            
      })
    })
    
  }

  mClear(){
    this.form = {
      name:"",
      email:"",
      password:"",
      industry: "",
      address:"",
      phone:"",
    }
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
