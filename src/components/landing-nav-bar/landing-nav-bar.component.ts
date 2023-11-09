import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-nav-bar',
  templateUrl: './landing-nav-bar.component.html',
  styleUrls: ['./landing-nav-bar.component.css']
})
export class LandingNavBarComponent {

 sidebar = false
 onSidebar(){
   this.sidebar = true
 }
 closeBar(){
  this.sidebar = false
 }
}
