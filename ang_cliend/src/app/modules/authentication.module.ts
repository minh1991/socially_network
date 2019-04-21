import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './../components/authentication/authentication.component';
import { LoginComponent } from './../components/login/login.component';
import { SignupComponent } from './../components/signup/signup.component';
import { AuthenticationService } from './../services/authentication.service';

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, SignupComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [AuthenticationComponent, LoginComponent, SignupComponent],
  providers: [AuthenticationService]
})
export class AuthenticationModule {}
