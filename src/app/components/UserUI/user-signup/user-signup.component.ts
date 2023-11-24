import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  form = {
    name:"",
    email:"",
    password:"",
    address:"",
    phone:"",
  }
  spnValue = 0;
  
  constructor(private auth: AuthService) { }

  Register(){
    this.spnValue = 1;
    this.auth.mCSignUp(this.form).subscribe({
      next: data => {
        console.log(data)
        this.mClear();
      }
    })

    this.spnValue = 1;
  }

  mClear(){
    this.form = {
      name:"",
      email:"",
      password:"",
      address:"",
      phone:"",
    }
  }


}
