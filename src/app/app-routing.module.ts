import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ProcessComponent } from './process/process.component';

const routes: Routes = [
  {path: "orders", component: OrderComponent},
  {path: "process", component: ProcessComponent},
  {path:"", redirectTo:"/orders", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
