import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './../components/authentication/authentication.component';
import { LoginComponent } from './../components/login/login.component';
import { SignupComponent } from './../components/signup/signup.component';

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, SignupComponent],
  imports: [CommonModule],
  exports: [AuthenticationComponent, LoginComponent, SignupComponent]
})
export class AuthenticationModule {}
