import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.css']
})
export class AccountHeaderComponent implements OnInit {

  constructor(private cookieService: CookieService, public router: Router) { }
  cookieExists = this.cookieService.check('AuthenticationToken');
  ngOnInit(): void {
    if(!this.cookieExists){
      this.router.navigate(['/login'])
    }else{
        

    };
  }

  logOut(){
    this.cookieService.delete('AuthenticationToken')
    this.router.navigate(['/login'])
  }

}
