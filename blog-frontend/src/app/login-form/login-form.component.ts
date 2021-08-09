import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';


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

  constructor(private fb: FormBuilder, private http: HttpClient) { }

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
        this.data = JSON.stringify(data.user);
        this.data += data.token;
       
        
        console.warn();
      })

  }

}
