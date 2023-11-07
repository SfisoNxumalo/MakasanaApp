import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'Profile-component', component: ProfileComponent },
  {path: 'Slide-component', component: SlidebarComponent},
  {path: 'AboutUs-component', component: AboutUsComponent},
  {path: 'ContactUs-component', component: ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
