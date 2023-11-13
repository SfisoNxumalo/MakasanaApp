import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './Home/landing/landing.component';
import { HomeUiComponent } from './Home/home-ui/home-ui.component';
import { ProductsUiComponent } from './Home/products-ui/products-ui.component';
import { UserViewProductComponent } from './Home/user-view-product/user-view-product.component';

import { BusinessDashboardComponent } from './components/BusinessUI/business-dashboard/business-dashboard.component';
import { CompanySignupComponent } from './components/BusinessUI/company-signup/company-signup.component';
import { CompanyLoginComponent } from './components/BusinessUI/company-login/company-login.component';
import { OrderComponent } from './components/BusinessUI/order/order.component';
import { BusinessProductsComponent } from './components/BusinessUI/business-products/business-products.component';
import { AddProductComponent } from './components/BusinessUI/add-product/add-product.component';
import { ProcessComponent } from './components/BusinessUI/process/process.component';
import { ProductDetailComponent } from './components/BusinessUI/product-detail/product-detail.component';
import { ViewAProductComponent } from './components/BusinessUI/view-a-product/view-a-product.component';
import { BusinessProfileComponent } from './components/BusinessUI/business-profile/business-profile.component';
import { ProfileComponent } from './components/BusinessUI/profiles/profile/profile.component';


import { CheckoutComponent } from './components/UserUI/checkout/checkout.component';
import { TrackOrderComponent } from './components/UserUI/track-order/track-order.component';
import { CartComponent } from './components/UserUI/cart/cart.component';
import { UserOrderComponent } from './components/UserUI/user-order/user-order.component';
import { WishlistComponent } from './components/UserUI/wishlist/wishlist.component';
import { OrderComfirmationComponent } from './components/UserUI/order-comfirmation/order-comfirmation.component';
import { UserprofileComponent } from './components/UserUI/Userprofile/userprofile/userprofile.component';
import { UserProfilePageComponent } from './components/UserUI/user-profile-page/user-profile-page.component';






const routes: Routes = [

  {path:'',redirectTo:'/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component:LandingComponent},
 
  { path: 'dashboard', component:BusinessDashboardComponent},

  { path: 'orders', component:OrderComponent},
  {path:"home", component:HomeUiComponent},
 

   { path: "my-products", component: BusinessProductsComponent },
   { path: "add-product", component: AddProductComponent},
   { path:"view-product/:id", component:ViewAProductComponent},

  { path: 'track-order', component:TrackOrderComponent},
  { path: 'product-details/:id', component:UserViewProductComponent},
  { path: 'process', component:ProcessComponent},
  
  { path: "company-signup", component: CompanySignupComponent},
  { path: "company-login", component: CompanyLoginComponent },
  { path: "my-products", component: BusinessProductsComponent },
  {path: "products", component: ProductsUiComponent},

  { path: "cart", component: CartComponent},
  { path:"consumer-profile",component: UserProfilePageComponent},
 
 
  {path:"buss-profile", component:BusinessProfileComponent},
  { path:"checkout",component:CheckoutComponent},
  

  { path: "user-order", component:UserOrderComponent},
  { path: "product-detail", component: ProductDetailComponent},
  { path: "wish-list", component: WishlistComponent},
  


  {path: "prof", component:ProfileComponent},

  {path: "order-comfirmation", component:OrderComfirmationComponent},
  {path:"user-profile",component:UserprofileComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
