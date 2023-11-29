import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BagService } from 'src/app/services/bag.service';
import { TokenService } from 'src/app/services/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { CartserviceService } from 'src/app/services/cartservice.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

//   profileForm: any = FormGroup
//     name: FormControl = new FormControl('', [Validators.required])
//     number: FormControl= new FormControl('')
//     honeypot:FormControl =  new FormControl('') // we will use this to prevent spam
//     message: FormControl = new FormControl('')

    
//   submitted: boolean = false; // show and hide the success message
// 	isLoading: boolean = false; // disable the submit button if we're loading
// 	responseMessage?: string; // the response message to show to the user

// items = JSON.parse(`${localStorage.getItem('CartItems')}`)
// totalAmount = JSON.parse(`${localStorage.getItem('Total')}`)
// userId:any
//items: any

constructor(private fb: FormBuilder, 
  private http: HttpClient ,
  private bagService: BagService, 
  private tokenService: TokenService, 
  private router: Router,
  private cart:AddToCartService,

private OrderProcess:CartserviceService){
  // this.profileForm = this.fb.group({
  //   name: this.name,
  //   message: this.message,
  //   number: this.number,
  //   honeypot: this.honeypot,

  // });
}
onSubmi() {
  // TODO: Use EventEmitter with form value
  // console.warn(this.profileForm.value);
}

mode:any = "determinate"
spnValue = 0
cartTotal = 0;
blCan = true;
blDis = false;
btnTex = "cancel"

order:any = []



ngOnInit(): void {
  //console.log(this.dataForm)
  // this.retrieveCheckout()
  // this.items
  // this.totalAmount
  // console.log(this.items)
  // const user = this.tokenService.getUser()
  // this.userId = user.id

  //this.items =this.totalItems.length

  this.cart.mShowCart().subscribe((data) => {
    this.cartTotal = data.length;
    if(this.cartTotal == 0){
      this.router.navigate(['/home'])
      return 
    }
    else{
      this.mSortCart(data)
    }
    
  })

  this.cart.mGetOrders().subscribe((data) => {
    this.order = data 
  })
}

subtotal = 0
total = 0

VatPrice = 0
cartMap = new Map<any, any>();

mSortCart(data:any){

  for(let item of data){

    if(this.cartMap.has(item.details)){
      let newItem = ((this.cartMap.get(item.details) || 0) + 1);
      this.cartMap.set(item.details, newItem);

      this.subtotal = this.subtotal + item.details.price

    }
    else{
      this.cartMap.set(item.details, 1);
      this.subtotal = this.subtotal + item.details.price
    } 
  }
  this.VatPrice = (this.subtotal * 0.15)
  this.total = this.subtotal + (this.subtotal * 0.15)



}
timeou:any;
interva:any;
progress = 0
mProcess(){

  if(this.order.length == 0){
    alert("Alert go back")
  }
  else{
    this.spnValue = 1

    if(this.interva){
      clearInterval(this.interva);
    }

    this.interva = setInterval(() =>{
      this.blDis = true;
      this.blCan = !this.blDis;
      this.progress = this.progress + 20;
      this.spnValue = this.progress

      if(this.progress > 100){
        
        this.mode = "indeterminate"
        clearInterval(this.interva);
        this.progress = 0;
        this.blCan = this.blDis;
        this.btnTex = "please wait .."
        this.mPlaceOrder()
        console.log(this.order)
      }
    }, 1000)
    
  }

}

mCancel(){
  this.blDis = false;
  clearInterval(this.interva);
  this.progress = 0;
  this.spnValue = 0;
  this.mode = "determinate"
  this.blCan = !this.blDis;
  this.btnTex = "cancel"
}

mPlaceOrder(){
  const body = {
    orders:this.order
  }
  
  this.OrderProcess.mProcessOrder(body).subscribe((data) => {
    if(data.message === 'successful')
    {
      
          if(this.timeou){
        clearTimeout(this.timeou);
      }
  
     this.timeou = setTimeout(() => {
      this.btnTex = "Successful"
      this.router.navigate(['/order-confirmation/' + data.orderId])
      this.mCancel();
      this.cart.mClear();
      }, 5000)
      
    }
    else{
      this.mCancel();
      this.btnTex = "Failed"
    }
  });
}


retrieveCheckout(): void {
  // if(!window.sessionStorage.getItem('auth-token')){
  //   this.router.navigate(['/login'])
  // }

}


payWithAyoba(){
  //Since this is south african only, currency always set to ZAR TODO: use dynamic currencies
  // let currency = "ZAR";
  // let provider = "Ozow"
  // console.log("I am here")
  // window["Android"].startPayment(provider,this.totalAmount,currency,"Test123");
}

postToCart(){
//   let pid;
//   let userId = this.userId
//   this.items.forEach((items:{id:any})=>{
//     pid = items.id
//     console.log(pid)

//     this.bagService.sendToCart({pid, userId})
 
//   this.clearCart()
//   this.replacePage()
//   })
// console.log(this.items[0].id)
// pid = this.items[0].id
// userId = this.userId  
// console.log(this.userId)
}



// clearCart() {

//   localStorage.removeItem('CartItems')
//   localStorage.removeItem('Total')
//   setTimeout(()=>{
//     window.location.href = '/menu'
//   }, 500)


//   }

//   replacePage(): void {
//     this.router.navigate(['/Payment'])
//   }

//   onSubmit(): void { 
//     console.warn(this.profileForm.value);
//     setTimeout(() => {
//       //this.router.navigate(['/closing-page'])
//     }, 3500);
//     if (this.profileForm.status == "VALID" && this.honeypot.value == "") {
//       this.profileForm.disable(); // disable the form if it's valid to disable multiple submissions
//       var formData: any = new FormData();

//       formData.append("name", this.profileForm.get("name")?.value);
//       formData.append("number", this.profileForm.get("number")?.value);
//        console.log(this.profileForm.value.name)

//       this.items.map((item: any) => {
//         formData.append("item", item.itemname)
//         formData.append("quantity", item.quantity)

//       })
//     }
//     this.isLoading = true; // sending the post request async so it's in progress
//         this.submitted = false; // hide the response message on multiple submits
//         this.http.post("https://script.google.com/macros/s/AKfycbwifHe-fTtnSjj5NmjBKH0tP6vXlysTpZn6zL_sqBSMWpfEucNLo6conCWv9LAyAUFK/exec", formData).subscribe({
//           next: response => {
//             // choose the response message
//             if (response == "success") {
//               this.responseMessage = "Thanks for the message! I'll get back to you soon!";
//             } else {
//               this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
//             }
//             this.profileForm.enable(); // re enable the form after a success
//             this.submitted = true; // show the response message
//             this.isLoading = false; // re enable the submit button
//             console.log(response);
//           },
//           error: e => {
//             this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
//             this.profileForm.enable(); // re enable the form after a success
//             this.submitted = true; // show the response message
//             this.isLoading = false; // re enable the submit button
//             console.log(e);
//           }}
//         );
//       }
    }
