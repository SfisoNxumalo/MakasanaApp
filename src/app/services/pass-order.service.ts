import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassOrderService {

  constructor() { }

   currentOrder = new BehaviorSubject<any>([]);

  mPassOrder(data:any){
    this.mClear();
    this.currentOrder.next(data);
  }

  mGetOrder(){
    return this.currentOrder
  }

  private mClear(){
    this.currentOrder = new BehaviorSubject<any>([]);;
  }
}
