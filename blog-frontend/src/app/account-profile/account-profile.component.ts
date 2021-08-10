import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.css']
})
export class AccountProfileComponent implements OnInit {
  
  
  id = 0;

  userName = ""
  picture = ""

  constructor(public cookieService: CookieService,
               private http: HttpClient,
               private router: Router) { }

  ngOnInit(): void {
    if(!this.cookieService.check('AuthenticationToken')){ 
      this.router.navigate(['/login'])
    }else{
      this.id = this.getPayload()._id;
      this.http.get("http://localhost:8000/users/"+this.id)
      .subscribe(data =>{
        const dataString = JSON.stringify(data);
        const parsedData = JSON.parse(dataString);
        this.userName = parsedData.username;
      })
    }
    
    
  }

  getPayload(){
    const cookie = this.cookieService.get('AuthenticationToken')
    const tokenPayloadUrl = cookie.split('.')[1];
    const tokenPayload = tokenPayloadUrl.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(tokenPayload));
  }

}
