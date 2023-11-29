import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {
  orderIdd:any;
  constructor(
    private route:ActivatedRoute,){}
  ngOnInit(): void {
    this.orderIdd = this.route.snapshot.params[('id')]

  }



}
