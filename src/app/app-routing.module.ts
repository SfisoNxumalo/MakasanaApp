import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './Home/landing/landing.component';
import { HomeUiComponent } from './Home/home-ui/home-ui.component';
import { ProductsUiComponent } from './components/UserUI/products-ui/products-ui.component';
import { UserViewProductComponent } from './components/UserUI/user-view-product/user-view-product.component';
import { BusinessDashboardComponent } from './components/BusinessUI/business-dashboard/business-dashboard.component';
import { CompanySignupComponent } from './components/BusinessUI/company-signup/company-signup.component';
import { CompanyLoginComponent } from './components/BusinessUI/company-login/company-login.component';
import { OrderComponent } from './components/BusinessUI/order/order.component';
import { BusinessProductsComponent } from './components/BusinessUI/business-products/business-products.component';
import { AddProductComponent } from './components/BusinessUI/add-product/add-product.component';
import { ProcessComponent } from './components/BusinessUI/process/process.component';
import { ViewAProductComponent } from './components/BusinessUI/view-a-product/view-a-product.component';
import { BusinessProfileComponent } from './components/BusinessUI/business-profile/business-profile.component';
import { ProfileComponent } from './components/BusinessUI/profiles/profile/profile.component';

import { CheckoutComponent } from './components/UserUI/checkout/checkout.component';
import { TrackOrderComponent } from './components/UserUI/track-order/track-order.component';
// import { CartComponent } from './components/UserUI/cart/cart.component';
import { CartComponent} from './components/UserUI/cart/cart.component';
import { UserOrderComponent } from './components/UserUI/user-order/user-order.component';
import { WishlistComponent } from './components/UserUI/wishlist/wishlist.component';
import { UserprofileComponent } from './components/UserUI/Userprofile/userprofile/userprofile.component';
import { UserProfilePageComponent } from './components/UserUI/user-profile-page/user-profile-page.component';

import { UserSignupComponent } from './components/UserUI/user-signup/user-signup.component';
import { UserLoginComponent } from './components/UserUI/user-login/user-login.component';
import { WebsiteComponent } from './website/website.component';

import { AnalyticsUiComponent } from './components/BusinessUI/analytics-ui/analytics-ui.component';
import { ThanksComponent } from './components/UserUI/thanks/thanks.component';


const routes: Routes = [

  { path:'',redirectTo:'/makasana', pathMatch: 'full' },
  { path: 'makasana', component:LandingComponent},

  { path: 'dashboard', component:BusinessDashboardComponent},
  {path:'my-analytics', component:AnalyticsUiComponent},

  { path: 'orders', component:OrderComponent},
  {path:"home", component:HomeUiComponent},
  {path:"order-confirmation", component:ThanksComponent},

   { path: "my-products", component: BusinessProductsComponent },
   { path: "thanks", component: ThanksComponent },
   { path: "add-product", component: AddProductComponent},
   { path:"view-product/:id", component:ViewAProductComponent},

  { path: 'track-order', component:TrackOrderComponent},
  { path: 'product-details/:id', component:UserViewProductComponent},
  { path: 'process', component:ProcessComponent},

  { path: "company-signup", component: CompanySignupComponent},
  { path: "company-login", component: CompanyLoginComponent },
  { path: "user-signup", component: UserSignupComponent},
  { path: "user-login", component: UserLoginComponent},
  {path: "website",component:WebsiteComponent},

  { path: "products/:category", component: ProductsUiComponent},

  { path: "your-cart", component: CartComponent},
  { path:"consumer-profile",component: UserProfilePageComponent},
 
 
  {path:"buss-profile", component:BusinessProfileComponent},
  { path:"checkout",component:CheckoutComponent},


  { path: "user-order", component:UserOrderComponent},
  { path: "wish-list", component: WishlistComponent},



  { path: "prof", component:ProfileComponent},

 
  { path:"user-profile",component:UserprofileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
