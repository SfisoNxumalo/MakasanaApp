import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessDashboardComponent } from './BusinessUI/business-dashboard/business-dashboard.component';
import { CompanySignupComponent } from './BusinessUI/company-signup/company-signup.component';
import { CompanyLoginComponent } from './BusinessUI/company-login/company-login.component';
import { CheckoutComponent } from './UserUI/checkout/checkout.component';
import { LandingComponent } from '../components/landing/landing.component';
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

import { OrderComfirmationComponent } from './UserUI/order-comfirmation/order-comfirmation.component';

import { UserProductsComponent } from './UserUI/user-products/user-products.component';
import { BusinessProfileComponent } from './BusinessUI/business-profile/business-profile.component';



const routes: Routes = [

  {path:'',redirectTo:'view-product', pathMatch: 'full' },

  { path: 'landing-page', component:LandingComponent},
  { path: 'track-order', component:TrackOrderComponent},
  { path: 'orders', component:OrderComponent},
  { path: 'process', component:ProcessComponent},
  {path: 'dashboard', component:BusinessDashboardComponent},
  { path: "company-signup", component: CompanySignupComponent},
  { path: "company-login", component: CompanyLoginComponent },
  { path: "my-products", component: BusinessProductsComponent },
  { path: "cart", component: CartComponent},
  { path: "add-product", component: AddProductComponent},
  { path: "product-detail", component: ProductDetailComponent},
  {path:"buss-profile", component:BusinessProfileComponent},
  { path:"view-product/:id", component:ViewAProductComponent},
  {path:"checkout",component:CheckoutComponent},
  { path: "login", component: CompanyLoginComponent },
  { path: "my-products", component: BusinessProductsComponent },
  { path: "add-product", component: AddProductComponent},
  { path: "user-order", component:UserOrderComponent},
  {path: "order-comfirmation", component:OrderComfirmationComponent},
  {path:'',redirectTo:'/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
