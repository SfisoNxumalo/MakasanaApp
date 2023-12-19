import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'https://makasana-api.vercel.app/order';

  constructor(private http: HttpClient) {}

  createOrder(id:string,username:string, image:string, price:Number, paymentMethod:string, 
    orderNumber:string, orderStatus:string, contactNumber:string) :Observable<any> {
    return this.http.post(`${this.apiUrl}createOrder/${id}`,{username,image, price, paymentMethod, orderNumber,
    orderStatus,contactNumber},httpOptions)
  }
  getOrderById(id:string):Observable<any>{
    return this.http.get(this.apiUrl+"getOrder/"+id,httpOptions)
  }
  updateOrder(id:string,username:string, image:string, price:Number, paymentMethod:string, 
    orderNumber:string, orderStatus:string, contactNumber:string) :Observable<any> {
      return this.http.put(this.apiUrl+"updateOrder/"+id,{username,image, price, paymentMethod, orderNumber,
        orderStatus,contactNumber}, httpOptions)
  }
  getAllOrders(id:string):Observable<any>{
    return this.http.get(this.apiUrl+"findAll/"+id,httpOptions)
  }

}
