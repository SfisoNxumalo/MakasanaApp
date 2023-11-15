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
    contact:"",
    roles:"user"
  }
  constructor(private userService: UserService) { }



}
