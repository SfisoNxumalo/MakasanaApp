import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  form={
    username:"",
    email:"",
    password:"",
    address:"",
    phoneNumber:"",
    roles:"user"
  }
  constructor(private userService: UserService) { }



  Register(){
    this.userService.signup(this.form.username,this.form.email,this.form.password,this.form.address, this.form.phoneNumber,this.form.roles).subscribe({
      next:data=>{
        console.log(data)
      }
    })

    console.log(this.form)

  }


}
