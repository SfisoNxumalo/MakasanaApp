import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { CompanySignupComponent } from './company-signup/company-signup.component';
import { CompanyLoginComponent } from './company-login/company-login.component';

const routes: Routes = [

  {
    path: "profile", component: BusinessProfileComponent
  },
  {
    path: "signup", component: CompanySignupComponent
  },
  {
    path: "login", component: CompanyLoginComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
