import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NoEmailPopupComponent } from './no-email-popup/no-email-popup.component';
import { UsernameEmailExistsRegPopupComponent } from './username-email-exists-reg-popup/username-email-exists-reg-popup.component';
import { RegisterSuccessLoginTextComponent } from './register-success-login-text/register-success-login-text.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NoEmailPopupComponent,
    UsernameEmailExistsRegPopupComponent,
    RegisterSuccessLoginTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
