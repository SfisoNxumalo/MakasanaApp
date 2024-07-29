import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/services/notifications.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-business-dashboard',
  templateUrl: './business-dashboard.component.html',
  styleUrls: ['./business-dashboard.component.css']
})
export class BusinessDashboardComponent implements OnInit {

  constructor(private token:TokenService, private route:Router, private Noti: NotificationsService){}

   CompanyName = "Makasana"
  CompanyDetails:any = {};
  CompanyNotification:any = [];

  ngOnInit(): void {
      this.token.mShow().subscribe((data) =>{
        this.CompanyDetails = data
      });

      this.Noti.getMyNotifications().subscribe((data:Array<{}>) => {

        if(data.length){
          this.CompanyNotification = data.slice(0, 3)
        }
        else{
          this.CompanyNotification = ["No new notifications"]
        }
        
      });
    
  }
  
  image = "https://media.istockphoto.com/id/620737858/photo/cape-town-and-the-12-apostels-from-above.jpg?s=612x612&w=is&k=20&c=WBxI8OmAFXoGz5I5QjU0eI87I5C6K8h0Xs4JmArrEQQ=";
  

}
