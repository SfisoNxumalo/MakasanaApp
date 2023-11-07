import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
=======



>>>>>>> feature/profile
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { LandingNavBarComponent } from './landing-nav-bar/landing-nav-bar.component';
import { BusinessDashboardComponent } from './BusinessUI/business-dashboard/business-dashboard.component';
import { CompanySignupComponent } from './BusinessUI/company-signup/company-signup.component';
import { CompanyLoginComponent } from './BusinessUI/company-login/company-login.component';
import { TrackOrderComponent } from './UserUI/track-order/track-order.component';
import { OrderComponent } from './BusinessUI/order/order.component';
import { ProcessComponent } from './BusinessUI/process/process.component';
import { BusinessProductsComponent } from './BusinessUI/business-products/business-products.component';
import { AddProductComponent } from './BusinessUI/add-product/add-product.component';

=======
import { ProfileComponent } from './profiles/profile/profile.component';
import { SlidebarComponent } from './profiles/slidebar/slidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AboutUsComponent } from './profiles/about-us/about-us.component';
import { ContactUsComponent } from './profiles/contact-us/contact-us.component';
>>>>>>> feature/profile

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CompanySignupComponent,
    CompanyLoginComponent,
    LandingComponent,
    LandingNavBarComponent,
    BusinessDashboardComponent,
    TrackOrderComponent,
    BusinessProductsComponent,
    AddProductComponent
=======
    ProfileComponent,
    SlidebarComponent,
    AboutUsComponent,
    ContactUsComponent
>>>>>>> feature/profile
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    MatIconModule,
    HttpClientModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
=======
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,

>>>>>>> feature/profile
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
