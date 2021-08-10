import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = this.fb.group({
    usernameEmail : ["", Validators.required],
    password : ["", Validators.required]
  })

  data = ""

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private cookieService: CookieService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const formDirectory = this.loginForm.controls
    const body = {
      usernameEmail : formDirectory.usernameEmail.value,
      pass: formDirectory.password.value
    }

   const options ={
     withCredentials: true
   }

    this.http.post<any>("http://localhost:8000/login", body, options)
      .subscribe(data => {
          if(data.message === "Success"){
            this.data = JSON.stringify(data.user);
            this.data += JSON.stringify(data.token);
            const token = data.token;

            this.cookieService.set("AuthenticationToken", token.id, {expires: token.maxAge});
            this.router.navigate(['/account']);
            
          }else{
            this.data = data.message;
          }

      })

  }

}
