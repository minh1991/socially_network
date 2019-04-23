import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  showLoading = false;
  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  loginUser() {
    this.showLoading = true;
    console.log(this.loginForm.value);
    this.authenticationService.loginUser(this.loginForm.value).subscribe(
      data => {
        console.log(data);
        this.loginForm.reset();
        setTimeout(() => {
          this.router.navigate(['feed']);
        }, 1500);
      },
      err => {
        this.showLoading = false;
        // console.log(err.error.message);
        this.errorMessage = err.error.message;
      }
    );
  }
}
