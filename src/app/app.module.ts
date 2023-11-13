import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingNavBarComponent } from './Home/landing-nav-bar/landing-nav-bar.component';
import { LandingComponent } from './Home/landing/landing.component'; 
import { BusinessDashboardComponent } from './components/BusinessUI/business-dashboard/business-dashboard.component';
import { CompanySignupComponent } from './components/BusinessUI/company-signup/company-signup.component';
import { CompanyLoginComponent } from './components/BusinessUI/company-login/company-login.component';
import { TrackOrderComponent } from './components/UserUI/track-order/track-order.component';
import { OrderComponent } from './components/BusinessUI/order/order.component';
import { ProcessComponent } from './components/BusinessUI/process/process.component';
import { BusinessProductsComponent } from './components/BusinessUI/business-products/business-products.component';
import { AddProductComponent } from './components/BusinessUI/add-product/add-product.component';
import { UserOrderComponent } from './components/UserUI/user-order/user-order.component';

import { ViewAProductComponent } from './components/BusinessUI/view-a-product/view-a-product.component';
import { AboutUsComponent } from './components/BusinessUI/profiles/about-us/about-us.component';
import { SlidebarComponent } from './components/BusinessUI/profiles/slidebar/slidebar.component';
import { ProfileComponent } from './components/BusinessUI/profiles/profile/profile.component';
import { ContactUsComponent } from './components/BusinessUI/profiles/contact-us/contact-us.component';



import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule} from '@angular/material/sidenav';
import { CartComponent } from './components/UserUI/cart/cart.component';
import { BusinessProfileComponent } from './components/BusinessUI/business-profile/business-profile.component';
import { WishlistComponent } from './components/UserUI/wishlist/wishlist.component';
import { CheckoutComponent } from './components/UserUI/checkout/checkout.component';
import { OrderComfirmationComponent } from './components/UserUI/order-comfirmation/order-comfirmation.component';
import { UserprofileComponent } from './components/UserUI/Userprofile/userprofile/userprofile.component';
import { HomeUiComponent } from './Home/home-ui/home-ui.component';
import { ProductsUiComponent } from './Home/products-ui/products-ui.component';
import { UserViewProductComponent } from './Home/user-view-product/user-view-product.component';
import { UserProfilePageComponent } from './components/UserUI/user-profile-page/user-profile-page.component';


@NgModule({
  declarations: [
    AppComponent,

    CompanySignupComponent,
    CompanyLoginComponent,
    LandingComponent,
    LandingNavBarComponent,
    BusinessDashboardComponent,
    TrackOrderComponent,
    BusinessProductsComponent,
    AddProductComponent,
    UserOrderComponent,
    AddProductComponent,
    ViewAProductComponent,
    OrderComponent,
    ProcessComponent,
    ContactUsComponent,
    CartComponent,
    AboutUsComponent,
    ProfileComponent,
    ContactUsComponent,
    SlidebarComponent,
    WishlistComponent,
    CheckoutComponent,
    OrderComfirmationComponent,
    BusinessProfileComponent,
    UserprofileComponent,
    HomeUiComponent,
    ProductsUiComponent,
    UserViewProductComponent,
    UserProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
