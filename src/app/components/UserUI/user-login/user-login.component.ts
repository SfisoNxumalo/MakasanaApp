import { Component, TemplateRef } from '@angular/core';

import {Router} from '@angular/router'; // import router from angular router
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  form={
    email:"",
    password:"",
  }

  toasts: any[] = [];

  constructor(private auth: AuthService,private route:Router, private token:TokenService) { }

  signIn(){
    this.auth.mCSignIn(this.form).subscribe({
      next: data=> {
        console.log(data)
        this.token.saveToken(data.accessToken),
        this.route.navigate(["/home"])
      }
    })
  }


	show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
		this.toasts.push({ textOrTpl, ...options });
	}

	remove(toast: any) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}