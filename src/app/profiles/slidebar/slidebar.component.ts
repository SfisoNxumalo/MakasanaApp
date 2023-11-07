import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css'],
  // imports: [MatSidenavModule, NgIf, MatButtonModule],
})


export class SlidebarComponent {
  showFiller = false;

  constructor(private _sideBar : MatSidenavModule){}


}
