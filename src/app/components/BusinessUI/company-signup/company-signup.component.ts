import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.css']
})
export class CompanySignupComponent {


  form={
    username:"",
    email:"",
    password:"",
    address:"",
    contact:"",
    industry:"",
    roles:"business"
  }
  constructor(private userService: UserService) { }

  signUp(){
    this.userService.register(this.form.username,this.form.industry,this.form.email,
      this.form.password,this.form.address,this.form.contact, this.form.roles).subscribe(data=>[
        console.log(data)
      ])
  }

}
