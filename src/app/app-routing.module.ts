import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusinessDashboardComponent } from './BusinessUI/business-dashboard/business-dashboard.component';
import { CompanySignupComponent } from './BusinessUI/company-signup/company-signup.component';
import { CompanyLoginComponent } from './BusinessUI/company-login/company-login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LandingComponent } from './landing/landing.component';
import { TrackOrderComponent } from './UserUI/track-order/track-order.component';
import { OrderComponent } from './BusinessUI/order/order.component';
import { ProcessComponent } from './BusinessUI/process/process.component';
import { BusinessProductsComponent } from './BusinessUI/business-products/business-products.component';
import { AddProductComponent } from './BusinessUI/add-product/add-product.component';
import { ProductDetailComponent } from './BusinessUI/product-detail/product-detail.component';
import { CartComponent } from './UserUI/cart/cart.component';
import { ViewAProductComponent } from './BusinessUI/view-a-product/view-a-product.component';
import { UserOrderComponent } from './UserUI/user-order/user-order.component';
import { WishlistComponent } from './UserUI/wishlist/wishlist.component';
import { OrderComfirmationComponent } from './order-comfirmation/order-comfirmation.component';
import { UserprofileComponent } from './UserUI/Userprofile/userprofile/userprofile.component';
import { HomeUiComponent } from './UserUI/home-ui/home-ui.component';


const routes: Routes = [

  { path: 'landing-page', component:LandingComponent},
  { path: "login", component: CompanyLoginComponent },
  { path: "signup", component: CompanySignupComponent},
  {path:"home", component:HomeUiComponent},

  { path: 'dashboard', component:BusinessDashboardComponent},

  { path: 'orders', component:OrderComponent},

   { path: "my-products", component: BusinessProductsComponent },
   { path: "add-product", component: AddProductComponent},
   { path:"view-product/:id", component:ViewAProductComponent},

  { path: "login", component: CompanyLoginComponent },
  { path: "signup", component: CompanySignupComponent},
  { path: 'dashboard', component:BusinessDashboardComponent},

  { path: 'orders', component:OrderComponent},

   { path: "my-products", component: BusinessProductsComponent },
   { path: "add-product", component: AddProductComponent},
   { path:"view-product/:id", component:ViewAProductComponent},

  { path: 'track-order', component:TrackOrderComponent},
  // { path: 'orders', component:OrderComponent},
  { path: 'process', component:ProcessComponent},
  
 
  { path: "cart", component: CartComponent},
 
  { path: "product-detail", component: ProductDetailComponent},
  { path:"view-product/:id", component:ViewAProductComponent},
  { path:"checkout",component:CheckoutComponent},
  { path: "login", component: CompanyLoginComponent },
  { path: "my-products", component: BusinessProductsComponent },
  { path: 'dashboard', component:BusinessDashboardComponent},
  { path: "add-product", component: AddProductComponent},
  
  {path:"checkout",component:CheckoutComponent},
  
  { path: "user-order", component:UserOrderComponent},
  { path: "product-detail", component: ProductDetailComponent},
  { path: "wish-list", component: WishlistComponent},
  
  { path: 'track-order', component:TrackOrderComponent},

  { path: "cart", component: CartComponent},

  {path: "order-comfirmation", component:OrderComfirmationComponent},
  {path:"user-profile",component:UserprofileComponent},
  {path:'',redirectTo:'/landing-page', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
