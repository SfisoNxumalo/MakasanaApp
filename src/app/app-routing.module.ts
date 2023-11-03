import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TrackOrderComponent } from './UserUI/track-order/track-order.component';

const routes: Routes = [
  {path:'',redirectTo:'landing-page', pathMatch: 'full' },
  { path: 'landing-page', component:LandingComponent},
  { path: 'track-page', component:TrackOrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
