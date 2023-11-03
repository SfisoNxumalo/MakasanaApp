import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { CompanySignupComponent } from './company-signup/company-signup.component';
import { CompanyLoginComponent } from './company-login/company-login.component';


@NgModule({
  declarations: [
    AppComponent,
    BusinessProfileComponent,
    CompanySignupComponent,
    CompanyLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
