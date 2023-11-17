import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent {

  form={
    username:"",
    password:"",
  }
  constructor(private userService: UserService) { }



  Register(){
  

    console.log(this.form)

  }
}
