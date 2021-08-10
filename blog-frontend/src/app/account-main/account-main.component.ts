import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.css']
})
export class AccountMainComponent implements OnInit {

  constructor(private cookieService: CookieService, public router: Router) { }
  cookieExists = this.cookieService.check('AuthenticationToken');
    
  ngOnInit(): void {
    if(!this.cookieExists){
      this.router.navigate(['/login'])
    }else{
        

    };
  }

}
