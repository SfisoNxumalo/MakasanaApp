import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessDashboardComponent } from './BusinessUI/business-dashboard/business-dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { TrackOrderComponent } from './UserUI/track-order/track-order.component';
import { BusinessProductsComponent } from './BusinessUI/business-products/business-products.component';

const routes: Routes = [

  {path:'', redirectTo:'landing-page', pathMatch: 'full' },
  { path: 'landing-page', component:LandingComponent},
  { path: 'track-page', component:TrackOrderComponent},
  {path: 'dashboard', component:BusinessDashboardComponent},
  {path: 'my-products', component:BusinessProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
