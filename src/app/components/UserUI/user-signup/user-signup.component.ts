import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  form={
    name:"",
    email:"",
    password:"",
    address:"",
    phone:"",
  }
  constructor(private auth: AuthService) { }

  Register(){
    this.auth.mCSignUp(this.form).subscribe({
      next:data=>{
        console.log(data)
      }
    })

    console.log(this.form)

  }


}
