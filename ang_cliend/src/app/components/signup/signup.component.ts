import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  errorMessage: string;

  constructor(private authenticationService: AuthenticationService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]]
    });
  }

  signUpUser() {
    console.log(this.signUpForm.value);
    this.authenticationService.signUpUser(this.signUpForm.value).subscribe(
      data => {
        console.log(data);
      },
      err => {
        // console.log(err.error.message);
        this.errorMessage = err.error.message;
      }
    );
  }
}
