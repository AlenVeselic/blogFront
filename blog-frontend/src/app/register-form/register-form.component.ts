import { Component, OnInit } from '@angular/core';
import { 
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
 } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm = this.fb.group({
    emailAddress : ["", Validators.required],
    username : ["", Validators.required],
    password : ["", [ 
      Validators.required, Validators.minLength(8)
      ]
    ],
    confirmPassword : ["", Validators.required],
    firstName : ["", Validators.required],
    lastName : ["", Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.registerForm.value);
  }

}
