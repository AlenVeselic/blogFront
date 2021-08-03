import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
