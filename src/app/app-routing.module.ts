import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { CompanySignupComponent } from './company-signup/company-signup.component';
import { CompanyLoginComponent } from './company-login/company-login.component';

import { LandingComponent } from './landing/landing.component';
import { TrackOrderComponent } from './UserUI/track-order/track-order.component';



const routes: Routes = [

  {path:'',redirectTo:'landing-page', pathMatch: 'full' },
  { path: 'landing-page', component:LandingComponent},
  { path: 'track-page', component:TrackOrderComponent},

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
