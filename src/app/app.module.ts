import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { CompanySignupComponent } from './company-signup/company-signup.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { LandingComponent } from './landing/landing.component';
import { LandingNavBarComponent } from './landing-nav-bar/landing-nav-bar.component';
// import {MatIconModule} from '@angu
import { BusinessDashboardComponent } from './BusinessUI/business-dashboard/business-dashboard.component';
import { TrackOrderComponent } from './UserUI/track-order/track-order.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessProfileComponent,
    CompanySignupComponent,
    CompanyLoginComponent
    LandingComponent,
    LandingNavBarComponent,
    BusinessDashboardComponent,
    TrackOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
