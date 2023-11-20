import { Component } from '@angular/core';

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
  constructor() { }



  Register(){
  

    console.log(this.form)

  }
}
