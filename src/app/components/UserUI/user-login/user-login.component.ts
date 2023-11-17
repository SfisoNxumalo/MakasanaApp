import { Component, TemplateRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router'; // import router from angular router

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

  constructor(private userService: UserService,private route:Router) { }

  signIn(){
    this.userService.signIn(this.form.email, this.form.password).subscribe({
      next:data=>{
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