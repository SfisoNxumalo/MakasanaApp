import { Component } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  form = {
    name:"",
    email:"",
    password:"",
    address:"",
    phone:"",
  }
  spnValue = 0;
  
  constructor(private auth: AuthService) { }

  Register(){
    this.spnValue = 1;

    setTimeout(() => {
      this.auth.mCSignUp(this.form).pipe(
      finalize(() => {
        this.spnValue = 0;
      })
    ).subscribe({
      next: data => {
        this.mClear();
        alert(data.message)

      }, error(err) {
        if(err.status == 409){
          alert(err.error.message)
        }
        else{
          alert("We have encountered an error")
        }
        // this.spnValue = 0;
      },
    })
    }, 2000)
    

    // this.spnValue = 0;
  }

  mClear(){
    this.form = {
      name:"",
      email:"",
      password:"",
      address:"",
      phone:"",
    }
  }


}
