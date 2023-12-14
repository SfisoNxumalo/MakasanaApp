import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';
// const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  signOut(): void{
    window.sessionStorage.clear()
  }

  public saveToken(token: string): void{
    window.sessionStorage.setItem(TOKEN_KEY, token)
  }

  public getToken(): string | null{
    return window.sessionStorage.getItem(TOKEN_KEY)
  }

   logData = new BehaviorSubject<any>({});

   sendData(data:any){
    this.logData.next(data);
    // alert(JSON.stringify(data))
    window.sessionStorage.setItem("user", JSON.stringify(data))
   }

   mShow(){
    this.logData.next(JSON.parse(window.sessionStorage.getItem("user") || "{}"));
    
    return this.logData;
   }

  // public saveUser(user: any): void{
  //   window.sessionStorage.removeItem(USER_KEY)
  //   window.sessionStorage.setItem(USER_KEY, JSON.stringify(user))
  // }

  // public getUser(): any {
  //   const user = window.sessionStorage.getItem(USER_KEY)
  //   if(user) {
  //     return JSON.parse(user)
  //   }
  //   return {}
  // }
}