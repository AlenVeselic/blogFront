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
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm = this.fb.group({
    emailAddress : ["", [Validators.required,
                        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    username : ["", Validators.required],
    password : ["", [ 
      Validators.required, Validators.minLength(8)
      ]
    ],
    confirmPassword : ["", Validators.required],
    firstName : ["", Validators.required],
    lastName : ["", Validators.required]
  }, { validators: passwordConfirmationValidator});

  data = ""

  constructor(private fb: FormBuilder, private http: HttpClient ) { }

  ngOnInit(): void {
  }

  onSubmit(){

    const formDirectory = this.registerForm.controls
    const body =  { username: formDirectory.username.value,
                    email: formDirectory.emailAddress.value,
                    pass: formDirectory.password.value,
                    name: formDirectory.firstName.value,
                    surname: formDirectory.lastName.value
                    }

    this.http.post<any>("http://localhost:8000/users", body)
      .subscribe(data => {
        this.data = JSON.stringify(data);
      })
  }


}

export const passwordConfirmationValidator: ValidatorFn = (control: AbstractControl):

ValidationErrors | null => {
  const password = control.get('password');
  const confirmation = control.get('confirmPassword');

  return password && confirmation && password.value != confirmation.value ? { noMatch: true } : null;
};
