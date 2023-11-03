import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessDashboardComponent } from './BusinessUI/business-dashboard/business-dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component:BusinessDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
