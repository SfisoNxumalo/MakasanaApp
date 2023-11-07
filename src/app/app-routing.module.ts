import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profiles/profile/profile.component';
import { SlidebarComponent } from './profiles/slidebar/slidebar.component';
import { AboutUsComponent } from './profiles/about-us/about-us.component';
import { ContactUsComponent } from './profiles/contact-us/contact-us.component';

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
