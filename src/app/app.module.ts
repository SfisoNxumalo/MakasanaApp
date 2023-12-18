import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
// import {MatCheckboxModule} from '@angular/material/checkbox';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgForm } from '@angular/forms'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
import { UserprofileComponent } from './components/UserUI/Userprofile/userprofile/userprofile.component';
import { HomeUiComponent } from './Home/home-ui/home-ui.component';
import { ProductsUiComponent } from './components/UserUI/products-ui/products-ui.component';
import { UserViewProductComponent } from './components/UserUI/user-view-product/user-view-product.component';
import { UserProfilePageComponent } from './components/UserUI/user-profile-page/user-profile-page.component';
import { UserLoginComponent } from './components/UserUI/user-login/user-login.component';
import { UserSignupComponent } from './components/UserUI/user-signup/user-signup.component';
import { AnalyticsUiComponent } from './components/BusinessUI/analytics-ui/analytics-ui.component';
import {MatBadgeModule} from '@angular/material/badge';
import { TopBarComponent } from './components/UserUI/top-bar/top-bar.component';
import { ThanksComponent } from './components/UserUI/thanks/thanks.component';
import { WebsiteComponent } from './components/BusinessUI/website/website.component';
import { AddWebsiteDetailsComponent } from './components/BusinessUI/add-website-details/add-website-details.component';
import { SpinnerComponentComponent } from './spinner-component/spinner-component.component';
import { ViewBusinessProductsComponent } from './components/UserUI/view-business-products/view-business-products.component';
import { BusinessTopComponent } from './components/BusinessUI/business-top/business-top.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';

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
    BusinessProfileComponent,
    UserprofileComponent,
    HomeUiComponent,
    ProductsUiComponent,
    UserViewProductComponent,
    UserProfilePageComponent,
    UserSignupComponent,
    UserLoginComponent,
    UserViewProductComponent,
    UserProfilePageComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserProfilePageComponent,
    AnalyticsUiComponent,
    UserSignupComponent,
    TopBarComponent,
    ThanksComponent,
    WebsiteComponent,
    AddWebsiteDetailsComponent,
    SpinnerComponentComponent,
    ViewBusinessProductsComponent,
    BusinessTopComponent,
    BottomNavComponent
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
    MatBadgeModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
