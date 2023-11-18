import { Component } from '@angular/core';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent {

  form={
    email:"",
    password:"",
  }
  constructor(private userService: UserService, private tokenStorage: TokenstorageService) { }

  signIn(){
    this.userService.signIn(this.form.email, this.form.password).subscribe({
      next: data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);
    }})
  }
}
