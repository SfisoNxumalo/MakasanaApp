import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessDashboardComponent } from './BusinessUI/business-dashboard/business-dashboard.component';
import { CompanySignupComponent } from './BusinessUI/company-signup/company-signup.component';
import { CompanyLoginComponent } from './BusinessUI/company-login/company-login.component';

import { LandingComponent } from './landing/landing.component';
import { TrackOrderComponent } from './UserUI/track-order/track-order.component';
import { OrderComponent } from './BusinessUI/order/order.component';
import { ProcessComponent } from './BusinessUI/process/process.component';
import { BusinessProductsComponent } from './BusinessUI/business-products/business-products.component';
import { AddProductComponent } from './BusinessUI/add-product/add-product.component';



const routes: Routes = [

  {path:'',redirectTo:'landing-page', pathMatch: 'full' },

  { path: 'landing-page', component:LandingComponent},
  { path: 'track-page', component:TrackOrderComponent},
  { path: 'orders', component:OrderComponent},
  { path: 'process', component:ProcessComponent},
  {path: 'dashboard', component:BusinessDashboardComponent},
  { path: "signup", component: CompanySignupComponent},
  {  path: "login", component: CompanyLoginComponent },
  {  path: "my-products", component: BusinessProductsComponent },
  {path: "add-product", component: AddProductComponent}
import { ProfileComponent } from './profiles/profile/profile.component';
import { SlidebarComponent } from './profiles/slidebar/slidebar.component';
import { AboutUsComponent } from './profiles/about-us/about-us.component';
import { ContactUsComponent } from './profiles/contact-us/contact-us.component';

const routes: Routes = [
  { path: 'Profile-component', component: ProfileComponent },
  {path: 'Slide-component', component: SlidebarComponent},
  {path: 'AboutUs-component', component: AboutUsComponent},
  {path: 'ContactUs-component', component: ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
