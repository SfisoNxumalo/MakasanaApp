import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  form={
    username:"",
    password:"",
  }
  constructor(private userService: UserService) { }

  signUp(){
    this.userService.signIn(this.form.username, this.form.password).subscribe(data=>{
      console.log(data)
    })
  }
}