import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent {

  constructor(private route:Router){}

  mLogout(){
    sessionStorage.clear()
    this.route.navigate(["/makasana"])
  }

}
