import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './../components/authentication/authentication.component';
import { LoginComponent } from './../components/login/login.component';
import { SignupComponent } from './../components/signup/signup.component';
import { AuthenticationService } from './../services/authentication.service';
import { ErrorValidateComponent } from './../components/error-validate/error-validate.component';
import { CheckBoxConfirmComponent } from './../components/check-box-confirm/check-box-confirm.component';
import { CheckBoxConfirm } from './../services/checkboxconfirm.service';
@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    ErrorValidateComponent,
    CheckBoxConfirmComponent
  ],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [AuthenticationComponent, LoginComponent, SignupComponent, CheckBoxConfirmComponent],
  providers: [AuthenticationService, CheckBoxConfirm]
})
export class AuthenticationModule {}
