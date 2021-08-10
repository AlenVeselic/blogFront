import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountMainComponent } from './account-main/account-main.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path:"login", component: LoginFormComponent},
  {path:"register", component: RegisterFormComponent},
  {path:"account", component: AccountMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
